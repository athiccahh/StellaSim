# StellaSim

StellaSim is an interactive astronomy web app that brings together simulations, real space data, astronomy tools, educational pages, and an AI-powered space learning experience. It is built for students, astronomy lovers, and anyone who wants to explore space in a more visual and interactive way.

The goal of StellaSim is to make astronomy feel alive. Instead of only reading about planets, stars, telescopes, exoplanets, moon phases, or space missions, users can interact with different tools and simulations directly in the browser.

StellaSim includes a homepage, a main space simulation, live star map, telescope page, observation planner, exoplanet explorer, astronomy news, mission control tracker, moon atlas, light pollution map, spectroscopy lab, stellar evolution lab, space weather center, astronomy lessons, solar system orrery, and an object database.

---

## Table of Contents

- [About StellaSim](#about-stellasim)
- [Features](#features)
- [How to Use Each Page](#how-to-use-each-page)
- [Project Files](#project-files)
- [Tech Stack](#tech-stack)
- [Backend and API Features](#backend-and-api-features)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Deploying Online](#deploying-online)
- [Folder Structure](#folder-structure)
- [Common Problems](#common-problems)
- [Known Limitations](#known-limitations)
- [Educational Purpose](#educational-purpose)
- [Future Improvements](#future-improvements)
- [License](#license)
- [Credits](#credits)

---

## About StellaSim

StellaSim is designed as a full astronomy learning and exploration platform. It combines science, coding, simulation, and real astronomical data into one project.

The app is not just a single simulation. It is a collection of astronomy tools that work together as a space science dashboard. Each page focuses on a different part of astronomy, such as orbital motion, telescope viewing, space weather, exoplanets, moon features, light pollution, stellar evolution, spectra, and astronomy news.

The project uses a space-themed interface with dark backgrounds, NASA-inspired blue colors, glowing panels, rounded UI cards, and astronomy-style layouts.

---

## Features

StellaSim currently includes:

- Homepage and main hub
- AI astronomy tutor
- Main space simulation
- Live star map
- Solar system orrery
- Telescope tool
- Observation planner
- Exoplanet explorer
- Astronomy news center
- Mission control tracker
- Moon atlas
- Light pollution map
- Space weather center
- Spectroscopy lab
- Stellar evolution lab
- Object database
- Astronomy lessons

Some pages use real data from external astronomy APIs. Other pages are interactive educational simulations designed to explain space concepts visually.

---

## How to Use Each Page

### Home Page

File:

```txt
index.html
```

The home page is the central hub of StellaSim.

Use this page to:

- access the main StellaSim tools
- navigate to all astronomy modules
- ask astronomy questions through StellaSim AI
- explore the overall project layout
- open different simulations and reference tools

The homepage is usually the first page users should open. It introduces the StellaSim experience and links to the rest of the app.

If the AI chatbot is enabled, users can type astronomy or astrophysics questions and receive explanations from the backend AI route.

Example questions users can ask:

```txt
Why do planets orbit the Sun?
What is redshift?
How does a telescope collect light?
What makes an exoplanet habitable?
Why do stars become red giants?
```

---

### Main Simulation

File:

```txt
main-sim.html
```

The main simulation is the core space simulation page.

Use this page to:

- explore gravity and orbital motion
- view objects moving through space
- test planet and star interactions
- observe orbital paths
- experiment with space physics ideas
- visualize how objects behave under gravity

This page is meant to feel like the main StellaSim physics sandbox. Users can use it to understand concepts such as gravitational attraction, orbital speed, curved motion, and how planets stay in orbit.

Possible learning topics:

- Newton’s law of universal gravitation
- orbital velocity
- elliptical orbits
- star and planet interactions
- space motion
- gravity wells and curvature-style visuals

---

### Live Star Map

File:

```txt
live-star-map.html
```

The live star map is a sky-viewing and planetarium-style tool.

Use this page to:

- view stars and constellations
- explore the night sky
- identify major sky objects
- understand how the sky changes based on position and time
- learn where objects appear in the sky

This page is meant to work like a simplified digital planetarium. It helps users connect astronomy concepts to what they might actually see outside.

Possible learning topics:

- constellations
- star positions
- right ascension and declination
- horizon and cardinal directions
- apparent motion of the sky
- sky navigation

---

### Solar System Orrery

File:

```txt
solar-system-orrery.html
```

The solar system orrery shows the planets moving around the Sun in a model-style view.

Use this page to:

- view the planets in the solar system
- compare orbital distances
- observe orbital motion
- understand relative planet positions
- study the structure of the solar system

An orrery is a model of planetary motion. This page helps users visualize how planets orbit the Sun and how their distances and speeds differ.

Possible learning topics:

- solar system layout
- orbital periods
- inner planets vs outer planets
- relative distance
- planetary motion
- heliocentric model

---

### Telescope

File:

```txt
telescope.html
```

The telescope page is designed around telescope viewing and astronomy equipment.

Use this page to:

- learn how telescopes work
- understand aperture, light gathering, and resolution
- explore telescope-related concepts
- connect sky objects to observation planning
- prepare for future telescope integration

This page can be used as a learning tool for observational astronomy. It helps explain why telescopes are useful and what makes one telescope more powerful than another.

Important telescope equation:

```txt
A = π(D / 2)^2
```

Where:

- `A` is the light-collecting area
- `D` is the telescope aperture diameter

Resolution can also be explained with:

```txt
θ = 1.22λ / D
```

Where:

- `θ` is angular resolution
- `λ` is wavelength
- `D` is aperture diameter

Possible learning topics:

- aperture
- magnification
- resolution
- light gathering
- telescope types
- observing conditions

---

### Observation Planner

File:

```txt
observation-planner.html
```

The observation planner helps users plan astronomy viewing sessions.

Use this page to:

- organize possible objects to observe
- plan astronomy nights
- check what targets are interesting
- connect observation goals to sky conditions
- prepare for telescope use

This page is meant for people who want to actually go outside and observe the sky. It works like a planning dashboard for astronomy sessions.

Possible uses:

- choosing targets for the night
- planning moon observations
- planning planet observations
- preparing telescope sessions
- organizing astronomy events
- tracking what to observe next

---

### Exoplanet Explorer

File:

```txt
exoplanet-explorer.html
```

The exoplanet explorer lets users search and explore planets outside our solar system.

Use this page to:

- search for real exoplanets
- view planet cards
- compare exoplanets to Earth
- see planet radius, mass, orbit, and host star information
- learn whether a planet could possibly be habitable
- filter by planet type

The backend can connect to the NASA Exoplanet Archive through the route:

```txt
GET /api/exoplanets
```

The explorer may show information such as:

- planet name
- host star
- distance from Earth
- discovery year
- discovery method
- radius in Earth radii
- mass in Earth masses
- orbital period
- equilibrium temperature
- star type
- habitability score
- explanation of whether humans could live there

The habitability score is educational and simplified. It is not an official scientific habitability rating.

Possible learning topics:

- exoplanets
- transit method
- radial velocity method
- habitable zone
- super-Earths
- gas giants
- hot Jupiters
- planet comparison

---

### Astronomy News

File:

```txt
astronomy-news.html
```

The astronomy news page shows live or recent astronomy and space-related news.

Use this page to:

- read recent astronomy news
- follow NASA and space mission updates
- learn about new discoveries
- track exoplanet, telescope, and spaceflight stories
- stay updated on current events in space science

The backend can provide news through:

```txt
GET /api/space-news
```

and optionally:

```txt
GET /api/general-astro-news
```

The news page may include categories such as:

- Spaceflight
- NASA
- Exoplanets
- Telescopes
- Solar System
- Cosmology
- Astronomy

Possible learning topics:

- current missions
- rocket launches
- telescope discoveries
- space exploration
- new planets
- black holes and galaxies
- NASA updates

---

### Mission Control

File:

```txt
mission-control.html
```

Mission Control is a space missions tracker.

Use this page to:

- explore active and upcoming space missions
- learn about NASA, ESA, JAXA, ISRO, SpaceX, Rocket Lab, and other missions
- track spacecraft and mission goals
- understand what different missions are studying
- view mission-style information in a dashboard format

This page is designed to feel like a space operations board. It can include missions such as:

- Mars rovers
- lunar missions
- Europa Clipper
- JWST
- Voyager
- Parker Solar Probe
- launch vehicles
- upcoming launches
- active spacecraft

Possible learning topics:

- space missions
- spacecraft
- launch providers
- planetary exploration
- lunar exploration
- deep space probes
- mission timelines

---

### Moon Atlas

File:

```txt
moon-atlas.html
```

The moon atlas is a detailed Moon exploration page.

Use this page to:

- study lunar features
- learn about craters and maria
- view Apollo and Artemis-related locations
- understand moon phases
- explore the near side of the Moon
- learn what features are visible through telescopes

This page is useful for both learning and observation planning. Users can connect lunar geography with what they might see through a telescope.

Possible learning topics:

- lunar maria
- craters
- highlands
- Apollo landing sites
- Artemis missions
- moon phases
- telescope lunar viewing

---

### Light Pollution Map

File:

```txt
light-pollution-map.html
```

The light pollution map helps users understand how artificial light affects sky visibility.

Use this page to:

- explore sky darkness by location
- understand light pollution
- learn about the Bortle scale
- compare urban and rural observing conditions
- plan better stargazing locations

The page can help explain why stars are harder to see from cities and why dark-sky sites are important for astronomy.

Possible learning topics:

- Bortle scale
- sky brightness
- urban light pollution
- dark-sky observing
- Milky Way visibility
- astronomy site planning

Example Bortle scale idea:

```txt
Bortle 1 = excellent dark sky
Bortle 9 = inner-city sky
```

---

### Space Weather Center

File:

```txt
space-weather-center.html
```

The space weather center focuses on solar activity and conditions that affect Earth and observation.

Use this page to:

- learn about solar storms
- understand auroras
- track space weather-style conditions
- study the Sun’s effect on Earth
- connect solar activity to satellites, radio, and astronomy

Possible learning topics:

- solar wind
- solar flares
- coronal mass ejections
- auroras
- geomagnetic storms
- sunspots
- Earth’s magnetosphere

This page is useful because space weather affects both technology and the night sky.

---

### Spectroscopy Lab

File:

```txt
spectroscopy-lab.html
```

The spectroscopy lab teaches users how light can reveal what objects in space are made of.

Use this page to:

- explore spectra
- identify absorption and emission lines
- understand chemical composition
- learn about redshift and blueshift
- compare spectra from stars, galaxies, nebulae, and exoplanet atmospheres

Spectroscopy is one of the most important tools in astronomy. It allows scientists to study objects that are too far away to visit directly.

Important redshift equation:

```txt
z = (λ_observed - λ_rest) / λ_rest
```

Where:

- `z` is redshift
- `λ_observed` is the observed wavelength
- `λ_rest` is the original/rest wavelength

For small redshifts:

```txt
v ≈ cz
```

Where:

- `v` is velocity
- `c` is the speed of light
- `z` is redshift

Possible learning topics:

- absorption lines
- emission lines
- redshift
- blueshift
- stellar temperature
- chemical composition
- galaxy motion
- exoplanet atmospheres

---

### Stellar Evolution Lab

File:

```txt
stellar-evolution-lab.html
```

The stellar evolution lab helps users explore how stars are born, live, and die.

Use this page to:

- build or adjust a star
- change mass, age, or other properties
- see possible star life stages
- learn how different stars evolve
- understand why massive stars and small stars have different endings

Possible star stages:

- protostar
- main sequence star
- red dwarf
- red giant
- supergiant
- white dwarf
- neutron star
- black hole

Possible learning topics:

- stellar mass
- nuclear fusion
- main sequence
- red giants
- supernovae
- white dwarfs
- neutron stars
- black holes
- star lifetimes

A key idea is that mass controls much of a star’s life. More massive stars burn fuel faster and die more dramatically.

---

### Object Database

File:

```txt
object-database.html
```

The object database is a search-style astronomy reference page.

Use this page to:

- search for astronomy objects or topics
- read explanations about planets, stars, galaxies, nebulae, and missions
- learn background information about space objects
- use it like a mini astronomy encyclopedia

Possible searches:

```txt
Mars
Jupiter
Andromeda Galaxy
Orion Nebula
black hole
red giant
Europa
Kepler-452b
James Webb Space Telescope
```

This page is useful for quick learning and research-style exploration.

Possible learning topics:

- planets
- moons
- stars
- galaxies
- nebulae
- telescopes
- space missions
- astrophysics concepts

---

### Astronomy Lessons

File:

```txt
astronomy-lessons.html
```

The astronomy lessons page is an educational course-style part of StellaSim.

Use this page to:

- learn astronomy step by step
- complete lesson-style sections
- study concepts in a more guided way
- review astronomy vocabulary
- connect lessons to the simulations in the app

Possible lesson topics:

- solar system basics
- gravity and orbits
- moon phases
- stars and stellar evolution
- galaxies
- exoplanets
- telescopes
- spectroscopy
- space missions
- cosmology

This page is meant to make astronomy feel more approachable and interactive, similar to a learning app.

---

## Project Files

The current StellaSim frontend includes these main HTML pages:

```txt
astronomy-lessons.html
astronomy-news.html
exoplanet-explorer.html
index.html
light-pollution-map.html
live-star-map.html
main-sim.html
mission-control.html
moon-atlas.html
object-database.html
observation-planner.html
solar-system-orrery.html
space-weather-center.html
spectroscopy-lab.html
stellar-evolution-lab.html
telescope.html
```

Each page is a separate module inside the StellaSim project.

---

## Tech Stack

StellaSim uses:

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Google Gemini API
- NASA APIs
- NASA Exoplanet Archive
- Spaceflight News API
- NewsAPI, optional

Depending on the page, StellaSim may also use:

- Canvas API
- SVG
- Three.js
- p5.js
- browser animation tools
- custom frontend JavaScript

---

## Backend and API Features

StellaSim uses a Node/Express backend through `server.js`.

The backend can:

- serve the frontend files from the `public/` folder
- power StellaSim AI through Gemini
- load astronomy news
- load NASA Astronomy Picture of the Day
- load real exoplanet data
- process exoplanet data into frontend-friendly objects
- create educational habitability scores
- classify exoplanets by type

Main backend routes:

```txt
POST /api/ask
GET /api/space-news
GET /api/apod
GET /api/general-astro-news
GET /api/exoplanets
```

---

## API Route Details

### StellaSim AI

```txt
POST /api/ask
```

This route sends a user’s astronomy question to Gemini and streams back an answer.

Example request body:

```json
{
  "question": "Why do planets orbit the Sun?"
}
```

This route requires:

```txt
GEMINI_API_KEY
```

---

### Space News

```txt
GET /api/space-news
```

This route gets articles from the Spaceflight News API.

Optional query parameters:

```txt
limit
offset
q
```

Example:

```txt
/api/space-news?limit=12
```

Example search:

```txt
/api/space-news?q=mars
```

---

### NASA Astronomy Picture of the Day

```txt
GET /api/apod
```

This route gets NASA’s Astronomy Picture of the Day.

It can return:

- title
- date
- explanation
- media type
- image URL
- HD image URL
- copyright

This route uses:

```txt
NASA_API_KEY
```

If no NASA key is provided, it uses NASA’s demo key.

---

### General Astronomy News

```txt
GET /api/general-astro-news
```

This route uses NewsAPI if a key is provided.

It requires:

```txt
NEWS_API_KEY
```

If no NewsAPI key is provided, this feature returns as disabled instead of breaking the app.

---

### Exoplanets

```txt
GET /api/exoplanets
```

This route loads exoplanet data from the NASA Exoplanet Archive.

Optional query parameters:

```txt
limit
q
```

Example:

```txt
/api/exoplanets?limit=40
```

Example search:

```txt
/api/exoplanets?q=kepler
```

Returned data can include:

- planet name
- host star
- distance
- discovery year
- discovery method
- radius
- mass
- orbital period
- semi-major axis
- equilibrium temperature
- star temperature
- star radius
- star mass
- star type
- RA
- Dec
- category
- habitability score
- human habitability explanation

---

## Exoplanet Habitability Score

StellaSim includes an educational habitability score for exoplanets.

The score considers:

- radius
- mass
- estimated temperature
- host star temperature
- orbital period
- whether the planet is likely a gas giant
- whether the planet is likely a hot Jupiter

The score is simplified and meant for learning. It is not an official habitability index.

Labels may include:

```txt
Very Unlikely
Low
Possible but uncertain
Promising
Strong candidate
```

---

## Exoplanet Categories

The exoplanet explorer may classify planets as:

```txt
Hot Jupiter
Gas Giant
Habitable Zone Candidate
Earth Sized
Super-Earth
Mini-Neptune
Recently Discovered
Other Confirmed Planet
```

These categories are estimated from available planet data.

---

## Environment Variables

Create a `.env` file locally.

Do not upload `.env` to GitHub.

Example:

```env
GEMINI_API_KEY=your_gemini_api_key_here
NASA_API_KEY=your_nasa_api_key_here
NEWS_API_KEY=your_newsapi_key_here
PORT=3000
```

Required:

```txt
GEMINI_API_KEY
```

Optional:

```txt
NASA_API_KEY
NEWS_API_KEY
PORT
```

The app needs `GEMINI_API_KEY` for the AI chatbot to work.

---

## Git Ignore

The project should include a `.gitignore` file.

Recommended `.gitignore`:

```gitignore
node_modules/
.env
.DS_Store
```

Do not upload:

```txt
node_modules/
.env
```

Upload:

```txt
server.js
package.json
package-lock.json
public/
README.md
LICENSE
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

Enter the project folder:

```bash
cd YOUR-REPO-NAME
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your API keys:

```env
GEMINI_API_KEY=your_gemini_api_key_here
NASA_API_KEY=your_nasa_api_key_here
NEWS_API_KEY=your_newsapi_key_here
```

Start the server:

```bash
node server.js
```

Open the app:

```txt
http://localhost:3000
```

---

## Running Locally

To run StellaSim on your own computer:

```bash
node server.js
```

Then open:

```txt
http://localhost:3000
```

If it works, the terminal should show something like:

```txt
stellasim home is running at http://localhost:3000
```

---

## Deploying Online

StellaSim uses a Node backend, so GitHub Pages alone is not enough for the full app.

GitHub can store the code, but a hosting platform needs to run the server.

Recommended:

```txt
Render
```

Other options:

```txt
Railway
Vercel
Netlify
```

---

## Deploying on Render

1. Push the project to GitHub.
2. Go to Render.
3. Create a new Web Service.
4. Connect the GitHub repository.
5. Use these settings:

Build command:

```txt
npm install
```

Start command:

```txt
node server.js
```

6. Add environment variables:

```txt
GEMINI_API_KEY
NASA_API_KEY
NEWS_API_KEY
```

7. Deploy.

Render will give a live URL like:

```txt
https://your-project-name.onrender.com
```

---

## Folder Structure

A recommended folder structure:

```txt
StellaSim/
  server.js
  package.json
  package-lock.json
  README.md
  LICENSE
  .gitignore
  public/
    index.html
    astronomy-lessons.html
    astronomy-news.html
    exoplanet-explorer.html
    light-pollution-map.html
    live-star-map.html
    main-sim.html
    mission-control.html
    moon-atlas.html
    object-database.html
    observation-planner.html
    solar-system-orrery.html
    space-weather-center.html
    spectroscopy-lab.html
    stellar-evolution-lab.html
    telescope.html
    assets/
    models/
    css/
    js/
```

The exact folder structure may vary, but the frontend files should be inside `public/` if the Express server is serving static files from `public`.

---

## Common Problems

### The AI does not work

Check that this exists in the environment variables:

```txt
GEMINI_API_KEY
```

If the app is deployed, add it in the hosting platform’s environment variable settings.

---

### The site loads but pages are missing

Make sure all HTML files are inside the `public/` folder.

Also check that links use relative paths like:

```html
<a href="exoplanet-explorer.html">Exoplanet Explorer</a>
```

Do not use local computer paths like:

```txt
C:\Users\YourName\Desktop\StellaSim\index.html
```

---

### Render says “Cannot find module”

Run:

```bash
npm install
```

Then make sure the dependency is listed in `package.json`.

Common required dependencies:

```txt
express
dotenv
@google/generative-ai
```

---

### API data does not load

External APIs can fail because of:

- missing API keys
- rate limits
- internet/API downtime
- incorrect route paths
- CORS or fetch issues
- deployment environment problems

Check the server logs on Render or your hosting platform.

---

### The app works locally but not online

Check:

- file capitalization
- missing uploaded files
- missing environment variables
- whether files are inside `public/`
- whether the start command is correct
- whether the backend is actually deployed

Many online servers are case-sensitive, so this matters:

```txt
Moon.png
moon.png
```

Those are treated as different files online.

---

## Known Limitations

- Some features depend on external APIs.
- API keys may be required for full functionality.
- Free hosting platforms may sleep after inactivity.
- Exoplanet habitability scores are simplified for education.
- Some exoplanets have missing scientific measurements.
- Live data may fail if an external service is down.
- Large simulations may run slower on weaker devices.
- Browser performance may vary depending on the computer.

---

## Educational Purpose

StellaSim is built for education and exploration.

It is designed to help users learn about:

- gravity
- orbital motion
- stars
- planets
- exoplanets
- telescopes
- light pollution
- moon features
- spectroscopy
- space missions
- space weather
- astronomy news
- astrophysics concepts

Some values and explanations are simplified to make them easier to understand.

StellaSim should not be used as a replacement for official scientific research tools, professional telescope software, or peer-reviewed databases.

---

## Future Improvements

Possible future improvements include:

- more accurate live star map calculations
- telescope hardware integration
- improved object database
- more realistic solar system motion
- saved user observations
- better light pollution data
- more detailed moon atlas
- deeper spectroscopy tools
- more complete mission tracker
- space weather live API integration
- improved exoplanet visualization
- FITS file analysis tools
- user accounts
- saved favorites
- custom observation plans
- mobile layout improvements
- more interactive astronomy lessons

---

## License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

---

## Credits

Created by Athicha Chanpradub.

StellaSim was built as an astronomy-focused coding project combining simulation, real data, education, and interactive web design.

---

## Contact

For questions, ideas, or collaboration, contact the creator through GitHub.
