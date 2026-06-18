# StellaSim

StellaSim is an interactive astronomy platform built with web technologies. It includes astronomy simulation, live sky visualization, telescope control, observing tools, space data tools, and Stella AI.

## StellaSim AI

StellaSim AI is the built-in astronomy assistant for the platform.

It answers astronomy questions, explains space science concepts, helps users understand simulation behavior, and supports learning while using StellaSim. It can explain orbital mechanics, telescope concepts, exoplanets, FITS files, observing conditions, stellar evolution, spectroscopy, and general astrophysics.

StellaSim AI supports formatted math responses for equations, derivations, physics explanations, and step-by-step astronomy problems.

### Stella AI Droid

The Stella AI Droid is the physical companion version of StellaSim AI.

It is designed as a Raspberry Pi-based astronomy assistant that can speak, listen, and connect with the StellaSim website. The droid can use a microphone, speaker, camera support, and voice software to interact with users outside of the browser.

The droid is designed to support future observing sessions, telescope workflows, website commands, and astronomy questions through a physical companion device.

---

# Simulators

## Main Sim

Main Sim is a 3D gravity sandbox for building and testing space systems.

It supports stars, planets, moons, black holes, galaxies, asteroids, comets, satellites, and debris. Users can add objects, move them, edit their properties, follow them, delete them, and watch how gravity affects their motion.

The simulator can show stable orbits, unstable systems, collisions, escaping objects, binary star systems, circumbinary planets, satellite motion, asteroid belts, and custom planetary systems.

It includes orbit trails, object focus controls, pause and reset controls, distance units, habitable zone rings, Lagrange point markers, collision effects, and a curvature grid.

## Live Star Map

Live Star Map is a real-time sky viewer that shows the visible sky from a selected location and time.

It converts astronomical coordinates into altitude and azimuth so users can see where objects appear in the sky. It displays stars, constellations, planets, the Sun, the Moon, horizon markers, cardinal directions, atmosphere shading, constellation lines, major star labels, below-horizon fading, and sky grids.

Users can search for sky objects and select them to view detailed information. The info panel can show magnitude, distance, altitude, azimuth, right ascension, declination, visibility, rise and set times, constellation, viewing difficulty, best viewing months, seasonal visibility, and visible latitude range.

### Telescope Integration

Telescope Integration is built into the Live Star Map.

It allows StellaSim to connect the sky map with a physical GoTo telescope system. Users can choose a target in the Live Star Map and send a command for the telescope to point toward that object.

The system supports telescope status checking, connection state display, target selection, and GoTo movement commands. It can also run in mock mode so the telescope interface can be tested without hardware connected.

The planned telescope setup is based around a Sky-Watcher Skymax 102 AZ-GTi system. Future telescope features include tracking, alignment tools, field-of-view overlays, magnification tools, and observing workflow support.

## Stellar Evolution

Stellar Evolution is an interactive tool for studying how stars change over time.

It allows users to build or select stars and explore their life cycles. The tool can show how mass affects a star’s path, lifetime, temperature, brightness, radius, and final stage.

It is designed to explain stellar birth, main sequence behavior, red giant phases, supernova outcomes, white dwarfs, neutron stars, and black holes through visual models.

## Moon Map

Moon Map is an interactive lunar exploration tool.

It allows users to explore the Moon’s surface, craters, maria, landing sites, and major lunar features. Users can inspect regions of interest and learn about visible lunar geography.

The tool is designed for lunar observation planning, Moon phase context, surface feature identification, and Apollo or mission-related exploration.

## Solar System Orrery

Solar System Orrery is a model of the Solar System.

It shows planets, moons, comets, and spacecraft moving through space. Users can view orbital paths, compare distances, inspect objects, and understand how Solar System bodies move relative to each other.

The orrery is designed for visualizing planetary motion, orbital layout, object positions, and space mission context.

## Spectroscopy Lab

Spectroscopy Lab is an interactive tool for analyzing light.

It allows users to explore spectra, elements, redshift, and atmospheres. The tool can show how different materials leave patterns in light and how astronomers use those patterns to study objects that are far away.

It is designed to support learning about emission lines, absorption lines, wavelength, chemical composition, motion, and atmospheric detection.

## Exoplanet Explorer

Exoplanet Explorer is an interactive database for studying planets outside the Solar System.

Users can search and filter exoplanets by properties such as radius, mass, orbital period, distance, host star type, and possible habitability. It includes planet categories such as super-Earths, gas giants, hot Jupiters, and potentially habitable worlds.

The explorer can show planet cards, orbit visuals, Earth comparisons, habitability summaries, and basic models of exoplanet systems.

---

# Sky Tools

## Mission Control

Mission Control tracks space launches, spacecraft, and active missions.

It is designed to show information from space agencies and companies such as NASA, ESA, JAXA, ISRO, SpaceX, Rocket Lab, and other space organizations. It can display upcoming launches, active spacecraft, Mars rovers, lunar missions, planetary missions, deep-space probes, and major space observatories.

Mission Control gives users a central place to follow real space exploration activity.

## Observation Planner

Observation Planner helps users prepare astronomy sessions.

Users can select targets, set date and time information, enter location details, check visibility, review altitude, and organize observing notes. It helps users decide what to observe before using the telescope or Live Star Map.

The planner is designed to support target selection, observing windows, session notes, and practical preparation for real skywatching.

## Astro Notebook

Astro Notebook is a personal observing journal.

Users can save observing sessions with target names, telescope settings, eyepiece information, weather, seeing, transparency, location, notes, sketches, and images.

It works as a field journal for real astronomy sessions. Each entry can store both technical observing details and personal notes from the session.

## Light Pollution Map

Light Pollution Map helps users find darker and better observing locations.

It can show sky brightness, observing quality, and location conditions. Users can use it to compare places and decide where the sky will be better for viewing stars, planets, nebulae, galaxies, or meteor showers.

The tool is designed to support observing plans, telescope sessions, and night-sky visibility checks.

## Space Weather Center

Space Weather Center tracks solar storms, auroras, and observing conditions.

It can show solar activity, geomagnetic conditions, aurora chances, and other space weather information that affects Earth and skywatching.

The tool is designed to help users understand when solar activity may affect radio conditions, aurora visibility, satellite behavior, or nighttime observation quality.

## Object Database

Object Database is a searchable reference tool for astronomy objects.

It stores information about stars, planets, moons, galaxies, nebulae, clusters, asteroids, comets, satellites, and other sky objects. Users can search for an object and view its properties, location data, visibility information, and observing details.

The database is designed to connect with other StellaSim tools so objects can be studied, planned, searched, and selected across the platform.

---

# Other

## Astronomy Lessons

Astronomy Lessons is the learning section of StellaSim.

It teaches astronomy through guided explanations, interactive examples, and practice-based content. Lessons can connect with the simulator, star map, object database, and other tools so users can learn a topic and then explore it directly.

The lessons section is designed for topics such as gravity, orbits, telescopes, stars, exoplanets, the Moon, spectroscopy, space missions, and observing skills.

## Astronomy News

Astronomy News displays current astronomy and space updates.

It can show news about discoveries, space missions, telescope updates, launches, planetary science, exoplanets, and other space-related events.

The news section connects to a backend route that fetches and displays astronomy news inside StellaSim.

---

# Technology

StellaSim is built with HTML, CSS, JavaScript, Node.js, and Express.

The frontend contains the interactive pages, visual tools, simulations, and user interface. The backend serves the site, handles API routes, supports StellaSim AI requests, provides astronomy news routes, and supports telescope communication.

The project uses a `public` folder for website files and a Node server for backend functionality.

---

# Project Structure

```text
StellaSim/
├── public/
│   ├── index.html
│   ├── stellasim-ai.html
│   ├── main-sim.html
│   ├── live-star-map.html
│   ├── stellar-evolution.html
│   ├── moon-map.html
│   ├── solar-system-orrery.html
│   ├── spectroscopy-lab.html
│   ├── exoplanet-explorer.html
│   ├── mission-control.html
│   ├── observation-planner.html
│   ├── astro-notebook.html
│   ├── light-pollution-map.html
│   ├── space-weather-center.html
│   ├── object-database.html
│   ├── astronomy-lessons.html
│   ├── astronomy-news.html
│   ├── css/
│   ├── js/
│   └── assets/
├── server.js
├── package.json
└── README.md
```

---

# Server Routes

```text
/api/ai
```

Handles StellaSim AI requests.

```text
/api/news
```

Fetches astronomy news for the news section.

```text
/api/telescope/status
```

Checks telescope connection and telescope status.

```text
/api/telescope/goto
```

Sends a GoTo command from the Live Star Map to the telescope integration.

---

# Local Setup

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Open the website:

```text
http://localhost:3000
```

---

# Status

StellaSim is an active project.

Current working areas include StellaSim AI, Main Sim, Live Star Map, Telescope Integration, Stellar Evolution, Moon Map, Solar System Orrery, Spectroscopy Lab, Exoplanet Explorer, Mission Control, Observation Planner, Astro Notebook, Light Pollution Map, Space Weather Center, Object Database, Astronomy Lessons, Astronomy News, and the Stella AI Droid.

Future work includes deeper telescope control, expanded catalogs, stronger observing tools, improved lessons, more data tools, and a closer connection between the website and physical hardware.
