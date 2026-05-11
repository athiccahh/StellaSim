const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const { randomUUID } = require("crypto");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.GEMINI_API_KEY) {
  console.error("missing GEMINI_API_KEY in .env");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// this cleans api text
function cleanText(value, fallback = "") {
  if (value === null || value === undefined) return fallback;
  const text = String(value).replace(/\s+/g, " ").trim();
  return text.length ? text : fallback;
}

// this turns api values into numbers or null
function numberOrNull(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

// this clamps a number between two values
function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

// this makes ids safe for frontend cards
function makeSafeId(prefix, value) {
  return `${prefix}-${Buffer.from(String(value || Date.now())).toString("base64url").slice(0, 28)}`;
}

// this builds the stellasim ai prompt
function buildPrompt(question) {
  return `
you are stellasim ai, an advanced astronomy and astrophysics tutor.

answer style:
- start directly with the answer
- explain the concept in clean paragraphs
- include the math and physics whenever useful
- put equations on their own lines
- define every variable clearly
- do not use json
- do not use markdown bold
- do not say "fascinating topic"
- do not say "let's dive in"
- do not ask follow-up questions
- do not end with a question
- do not sound like customer support

structure:
first section: conceptual explanation in paragraphs.
second section: math and physics with equations and variable definitions.
third section: one short paragraph connecting the idea to stellasim.

for orbit questions, include the relevant parts of:
F = G(Mm) / r^2
F_c = mv^2 / r
v_circular = sqrt(GM / r)
epsilon = v^2 / 2 - GM / r
epsilon = -GM / (2a)
v^2 = GM(2/r - 1/a)
r = a(1 - e^2) / (1 + e cos(theta))
T^2 = (4pi^2 / GM)a^3

for telescope questions, include the relevant parts of:
A = pi(D / 2)^2
light gathering ratio = (D2 / D1)^2
theta = 1.22 lambda / D

for redshift questions, include the relevant parts of:
z = (lambda_observed - lambda_rest) / lambda_rest
1 + z = lambda_observed / lambda_rest
v approx cz for small redshift

user question:
${question}
`.trim();
}

// this handles the home page ai chatbot
app.post("/api/ask", async (req, res) => {
  try {
    const { question } = req.body || {};

    if (!question || !question.trim()) {
      return res.status(400).type("text/plain").send("please send an astronomy question.");
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Transfer-Encoding", "chunked");

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContentStream(buildPrompt(question));

    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) res.write(text);
    }

    res.end();
  } catch (error) {
    console.error("gemini backend error:", error);

    res.status(500).type("text/plain").send(
      "something went wrong while asking stellasim ai through gemini."
    );
  }
});

// this guesses the astronomy news category
function inferNewsCategory(title, summary) {
  const text = `${title || ""} ${summary || ""}`.toLowerCase();

  if (
    text.includes("launch") ||
    text.includes("rocket") ||
    text.includes("mission") ||
    text.includes("spacecraft") ||
    text.includes("crew")
  ) {
    return "Spaceflight";
  }

  if (
    text.includes("exoplanet") ||
    text.includes("planet outside") ||
    text.includes("habitable")
  ) {
    return "Exoplanets";
  }

  if (
    text.includes("telescope") ||
    text.includes("jwst") ||
    text.includes("webb") ||
    text.includes("hubble") ||
    text.includes("observatory")
  ) {
    return "Telescopes";
  }

  if (
    text.includes("mars") ||
    text.includes("jupiter") ||
    text.includes("saturn") ||
    text.includes("moon") ||
    text.includes("asteroid") ||
    text.includes("comet")
  ) {
    return "Solar System";
  }

  if (
    text.includes("galaxy") ||
    text.includes("black hole") ||
    text.includes("dark matter") ||
    text.includes("cosmic") ||
    text.includes("universe")
  ) {
    return "Cosmology";
  }

  if (text.includes("nasa")) return "NASA";

  return "Astronomy";
}

// this loads live spaceflight news
app.get("/api/space-news", async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 18, 50);
    const offset = Math.max(Number(req.query.offset) || 0, 0);
    const q = cleanText(req.query.q);

    const params = new URLSearchParams({
      limit: String(limit),
      offset: String(offset),
      ordering: "-published_at"
    });

    if (q) params.set("search", q);

    const apiUrl = `https://api.spaceflightnewsapi.net/v4/articles/?${params.toString()}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Spaceflight News API returned ${response.status}`);
    }

    const data = await response.json();

    const articles = (data.results || []).map((item) => {
      const title = cleanText(item.title, "Untitled article");
      const summary = cleanText(item.summary, "No summary was returned.");

      return {
        id: item.id ? `snapi-${item.id}` : makeSafeId("snapi", item.url || title),
        title,
        summary,
        url: item.url || "",
        imageUrl: item.image_url || null,
        source: item.news_site || "Spaceflight News",
        publishedAt: item.published_at || null,
        category: inferNewsCategory(title, summary),
        apiSource: "Spaceflight News"
      };
    }).filter((article) => article.url);

    res.json({
      enabled: true,
      articles
    });
  } catch (error) {
    console.error("space news error:", error);

    res.status(500).json({
      enabled: true,
      articles: [],
      error: "Could not load Spaceflight News API."
    });
  }
});

// this loads nasa astronomy picture of the day
app.get("/api/apod", async (req, res) => {
  try {
    const apiKey = process.env.NASA_API_KEY || "DEMO_KEY";

    const params = new URLSearchParams({
      api_key: apiKey
    });

    const apiUrl = `https://api.nasa.gov/planetary/apod?${params.toString()}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`NASA APOD returned ${response.status}`);
    }

    const item = await response.json();

    res.json({
      title: item.title || "NASA Astronomy Picture of the Day",
      date: item.date || null,
      explanation: item.explanation || "",
      mediaType: item.media_type || "image",
      url: item.url || null,
      hdurl: item.hdurl || null,
      copyright: item.copyright || null
    });
  } catch (error) {
    console.error("apod error:", error);

    res.status(500).json({
      error: "Could not load NASA APOD."
    });
  }
});

// this loads optional broader astronomy news through newsapi
app.get("/api/general-astro-news", async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return res.json({
        enabled: false,
        articles: []
      });
    }

    const q =
      cleanText(req.query.q) ||
      `astronomy OR astrophysics OR NASA OR exoplanet OR "James Webb Space Telescope"`;

    const limit = Math.min(Number(req.query.limit) || 18, 50);

    const params = new URLSearchParams({
      q,
      pageSize: String(limit),
      language: "en",
      sortBy: "publishedAt",
      apiKey
    });

    const apiUrl = `https://newsapi.org/v2/everything?${params.toString()}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`NewsAPI returned ${response.status}`);
    }

    const data = await response.json();

    const articles = (data.articles || []).map((item, index) => {
      const title = cleanText(item.title, "Untitled article");
      const summary = cleanText(item.description || item.content, "No summary was returned.");
      const idBase = item.url || `${title}-${index}`;

      return {
        id: makeSafeId("newsapi", idBase),
        title,
        summary,
        url: item.url || "",
        imageUrl: item.urlToImage || null,
        source: item.source?.name || "NewsAPI Source",
        publishedAt: item.publishedAt || null,
        category: inferNewsCategory(title, summary),
        apiSource: "General News"
      };
    }).filter((article) => article.url);

    res.json({
      enabled: true,
      articles
    });
  } catch (error) {
    console.error("general news error:", error);

    res.status(500).json({
      enabled: true,
      articles: [],
      error: "Could not load general astronomy news."
    });
  }
});

// this cache keeps nasa archive searches from refetching constantly
const exoplanetCache = new Map();
const EXOPLANET_CACHE_MS = 20 * 60 * 1000;
const EXOPLANET_TIMEOUT_MS = 4500;

// this makes a fetch that gives up instead of freezing the page forever
async function fetchWithTimeout(url, options = {}, timeoutMs = EXOPLANET_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal
    });
  } finally {
    clearTimeout(timer);
  }
}

// this guesses the exoplanet category from available measurements
function inferExoplanetCategory(planet) {
  const radius = planet.radiusEarth;
  const mass = planet.massEarth;
  const period = planet.orbitalPeriodDays;
  const temp = planet.equilibriumTempK;
  const currentYear = new Date().getFullYear();

  const isGasGiant = (radius !== null && radius >= 6) || (mass !== null && mass >= 95);
  const isHotJupiter = isGasGiant && period !== null && period <= 10;
  const isHabitableCandidate =
    temp !== null && temp >= 180 && temp <= 320 &&
    radius !== null && radius >= 0.5 && radius <= 2.5;

  if (isHotJupiter) return "Hot Jupiter";
  if (isHabitableCandidate) return "Habitable Zone Candidate";
  if (isGasGiant) return "Gas Giant";
  if (radius !== null && radius >= 0.8 && radius <= 1.25) return "Earth Sized";
  if ((radius !== null && radius > 1.25 && radius <= 2.0) || (mass !== null && mass > 1 && mass <= 10)) return "Super-Earth";
  if (radius !== null && radius > 2.0 && radius <= 4.0) return "Mini-Neptune";
  if (planet.discoveryYear !== null && planet.discoveryYear >= currentYear - 5) return "Recently Discovered";
  return "Other Confirmed Planet";
}

// this gets the educational habitability score
function getHabitabilityScore(planet) {
  let score = 0;
  const radius = planet.radiusEarth;
  const mass = planet.massEarth;
  const temp = planet.equilibriumTempK;
  const starTemp = planet.starTempK;
  const period = planet.orbitalPeriodDays;

  if (radius !== null) {
    if (radius >= 0.8 && radius <= 1.25) score += 25;
    else if (radius >= 0.5 && radius <= 2.0) score += 18;
    else if (radius > 2.0 && radius <= 2.5) score += 10;
  }

  if (mass !== null) {
    if (mass >= 0.5 && mass <= 5) score += 20;
    else if (mass > 5 && mass <= 10) score += 12;
  }

  if (temp !== null) {
    if (temp >= 240 && temp <= 300) score += 30;
    else if (temp >= 180 && temp <= 320) score += 22;
    else if (temp >= 150 && temp <= 350) score += 10;
  }

  if (starTemp !== null) {
    if (starTemp >= 3000 && starTemp <= 7500) score += 10;
  } else {
    score += 4;
  }

  if (period !== null) {
    if (period >= 50) score += 10;
    else if (period >= 10) score += 5;
  }

  if ((radius !== null && radius >= 6) || (mass !== null && mass >= 95)) score -= 30;
  if (period !== null && period <= 3) score -= 10;

  return clampNumber(Math.round(score), 0, 100);
}

// this turns score into a readable label
function getHabitabilityLabel(score) {
  if (score <= 19) return "Very Unlikely";
  if (score <= 39) return "Low";
  if (score <= 59) return "Possible but uncertain";
  if (score <= 79) return "Promising";
  return "Strong candidate";
}

// this explains whether humans could live there using rules, not ai
function getHumanExplanation(planet, score, category) {
  const missingKeyData = planet.radiusEarth === null || planet.massEarth === null || planet.equilibriumTempK === null;
  const temp = planet.equilibriumTempK;
  const radius = planet.radiusEarth;

  if (category === "Hot Jupiter") {
    return "Humans could not live here. This is likely a giant planet orbiting very close to its star, so it would be extremely hot and have no solid Earth-like surface.";
  }

  if (category === "Gas Giant") {
    return "Humans could not live on the planet itself because it is likely a gas giant, but large moons around similar planets are sometimes interesting in science fiction and habitability discussions.";
  }

  if (missingKeyData) {
    return "There is not enough data to make a strong habitability estimate. Exoplanet measurements often have missing mass, radius, or atmosphere information.";
  }

  if (temp !== null && temp > 350) {
    return "Humans could not live here without extreme protection. The estimated equilibrium temperature is very hot, and the actual surface could be even hotter depending on the atmosphere.";
  }

  if (temp !== null && temp < 150) {
    return "Humans could not live here without extreme protection. The estimated equilibrium temperature is very cold, and liquid water would be difficult without a strong warming atmosphere.";
  }

  if (radius !== null && radius > 2.5) {
    return "This planet is probably too large to be Earth-like. It may have a thick atmosphere or volatile-rich composition instead of a rocky surface humans could stand on.";
  }

  if (score >= 60) {
    return "This planet has some Earth-like traits, but habitability is still uncertain because we may not know its atmosphere, surface pressure, radiation environment, or water content.";
  }

  return "This planet has some interesting measurements, but it does not look strongly Earth-like from the available data. Habitability depends on details we usually cannot measure yet.";
}

// this normalizes one nasa archive row for the frontend
function normalizeExoplanet(row) {
  const distancePc = numberOrNull(row.sy_dist);
  const fallbackId = randomUUID();

  const planet = {
    id: cleanText(row.pl_name, fallbackId),
    name: cleanText(row.pl_name, "Unknown Planet"),
    hostStar: cleanText(row.hostname, null),
    distanceLy: distancePc === null ? null : distancePc * 3.26156,
    distancePc,
    discoveryYear: numberOrNull(row.disc_year),
    discoveryMethod: cleanText(row.discoverymethod, null),
    radiusEarth: numberOrNull(row.pl_rade),
    massEarth: numberOrNull(row.pl_bmasse),
    orbitalPeriodDays: numberOrNull(row.pl_orbper),
    semiMajorAxisAu: numberOrNull(row.pl_orbsmax),
    equilibriumTempK: numberOrNull(row.pl_eqt),
    starTempK: numberOrNull(row.st_teff),
    starRadiusSolar: numberOrNull(row.st_rad),
    starMassSolar: numberOrNull(row.st_mass),
    starType: cleanText(row.st_spectype, null),
    ra: cleanText(row.rastr, null),
    dec: cleanText(row.decstr, null),
    category: "Other Confirmed Planet",
    habitabilityScore: 0,
    habitabilityLabel: "Very Unlikely",
    humanExplanation: ""
  };

  planet.category = inferExoplanetCategory(planet);
  planet.habitabilityScore = getHabitabilityScore(planet);
  planet.habitabilityLabel = getHabitabilityLabel(planet.habitabilityScore);
  planet.humanExplanation = getHumanExplanation(planet, planet.habitabilityScore, planet.category);

  return planet;
}

// this builds the archive query without expensive default sorting
function buildExoplanetAdql({ q, limit }) {
  const columns = `
    pl_name, hostname, sy_dist, disc_year, discoverymethod,
    pl_rade, pl_bmasse, pl_orbper, pl_orbsmax, pl_eqt,
    st_teff, st_rad, st_mass, st_spectype, rastr, decstr
  `;

  let where = "pl_name IS NOT NULL";

  if (q) {
    const safeQ = q.replaceAll("'", "''");
    where += ` AND (LOWER(pl_name) LIKE LOWER('%${safeQ}%') OR LOWER(hostname) LIKE LOWER('%${safeQ}%'))`;
  }

  // this keeps the initial archive request quick by avoiding big sort work
  return `
    SELECT TOP ${limit}
    ${columns}
    FROM pscomppars
    WHERE ${where}
  `;
}

// this loads real exoplanets from nasa archive with timeout + cache
app.get("/api/exoplanets", async (req, res) => {
  try {
    const rawLimit = Number(req.query.limit || 40);
    const limit = Math.min(Math.max(Math.floor(rawLimit), 1), 180);
    const q = cleanText(req.query.q, "");
    const cacheKey = `${q.toLowerCase()}::${limit}`;
    const cached = exoplanetCache.get(cacheKey);

    if (cached && Date.now() - cached.time < EXOPLANET_CACHE_MS) {
      return res.json(cached.payload);
    }

    const adql = buildExoplanetAdql({ q, limit });
    const tapUrl = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=${encodeURIComponent(adql)}&format=json`;

    const response = await fetchWithTimeout(tapUrl, {
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`NASA Exoplanet Archive returned ${response.status}: ${text.slice(0, 180)}`);
    }

    const rows = await response.json();
    const planets = Array.isArray(rows) ? rows.map(normalizeExoplanet) : [];

    const payload = {
      enabled: true,
      source: "NASA Exoplanet Archive pscomppars",
      planets,
      count: planets.length,
      offset: 0,
      limit,
      cached: false
    };

    exoplanetCache.set(cacheKey, {
      time: Date.now(),
      payload: { ...payload, cached: true }
    });

    res.json(payload);
  } catch (error) {
    console.error("exoplanet route failed:", error);

    res.status(500).json({
      enabled: false,
      planets: [],
      count: 0,
      error: "Could not load NASA Exoplanet Archive data quickly enough. The frontend will keep using its starter planet set."
    });
  }
});

// this starts stellasim
app.listen(port, () => {
  console.log(`stellasim home is running at http://localhost:${port}`);
});