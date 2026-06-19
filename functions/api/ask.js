// this cleans the user question
function cleanQuestion(value) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/\s+/g, " ").trim();
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

// this handles stellasim ai on cloudflare pages
export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    if (!env.GEMINI_API_KEY) {
      return new Response("missing GEMINI_API_KEY in Cloudflare environment variables.", {
        status: 500,
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      });
    }

    const body = await request.json().catch(() => ({}));
    const question = cleanQuestion(body.question);

    if (!question) {
      return new Response("please send an astronomy question.", {
        status: 400,
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      });
    }

    const geminiUrl =
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`;

    const geminiResponse = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: buildPrompt(question)
              }
            ]
          }
        ]
      })
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error("gemini api error:", errorText);

      return new Response("something went wrong while asking stellasim ai through gemini.", {
        status: 500,
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      });
    }

    const data = await geminiResponse.json();

    const answer =
      data?.candidates?.[0]?.content?.parts
        ?.map((part) => part.text || "")
        .join("")
        .trim() ||
      "StellaSim AI did not return a text answer.";

    return new Response(answer, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache"
      }
    });
  } catch (error) {
    console.error("stellasim ai cloudflare error:", error);

    return new Response("something went wrong while asking stellasim ai through gemini.", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
  }
}