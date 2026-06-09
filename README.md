# StellaSim

StellaSim is an interactive astronomy platform built with web technologies. It combines space simulation, sky visualization, telescope control, astronomy planning, data tools, and Stella AI into one connected system.

## Features

## Main Gravity Simulator

The main simulator is a 3D orbital sandbox for building and studying space systems.

It supports stars, planets, moons, black holes, galaxies, asteroids, comets, satellites, and debris. Objects can be placed into the scene, edited, moved, followed, and removed. The simulation calculates gravity between bodies so users can watch orbits form, destabilize, collide, or escape.

The simulator includes presets for common astronomical systems such as the Solar System, asteroid belts, binary stars, circumbinary planets, and satellite setups. It also includes visual tools like orbit trails, a curvature grid, habitable zone rings, Lagrange point markers, distance units, object focus controls, collision effects, and pause or reset controls.

## Live Star Map

The Live Star Map is a real-time planetarium view that shows the sky from a selected location and time.

It converts astronomical coordinates into the visible sky using altitude and azimuth. Stars, constellations, planets, the Sun, and the Moon are displayed relative to the horizon. The map includes constellation lines, major star labels, atmosphere shading, cardinal direction markers, an equatorial grid, an azimuthal grid, a horizon ring, and below-horizon fading.

Objects can be searched and selected. The info panel displays data such as object name, magnitude, distance, altitude, azimuth, right ascension, declination, visibility, rise and set information, constellation, viewing difficulty, best viewing months, seasonal visibility, and visible latitude range.

## Telescope Integration

The telescope integration connects StellaSim to a physical telescope system.

It is designed for GoTo telescope control from the Live Star Map. Users can select an object in the sky map and send a command for the telescope to point toward that target. The integration supports telescope status checking, connection state display, target selection, and movement commands.

The system can run in mock mode for testing without hardware. This allows the website interface, telescope controls, and status panels to be developed safely before connecting to the real telescope.

The planned hardware setup is based around a Sky-Watcher Skymax 102 AZ-GTi system. The integration is built to support real telescope movement, tracking, alignment tools, field-of-view overlays, magnification tools, and observation workflow features.

## Stella AI

Stella AI is the assistant system built into StellaSim.

It helps users ask astronomy questions, understand simulation behavior, learn concepts, and work through astrophysics problems. It is connected to the StellaSim interface so users can get help while using the simulator, star map, planning tools, or data tools.

Stella AI is designed to explain astronomy in a clear and useful way. It can help with orbital mechanics, telescope use, sky objects, observing conditions, exoplanets, FITS files, and general space science. It also supports formatted math responses for equations, derivations, and physics explanations.

## Stella AI Droid

The Stella AI Droid is the physical companion version of Stella.

It is designed as a small interactive astronomy assistant that can speak, listen, and connect with the StellaSim website. The droid uses a Raspberry Pi-based system with a microphone, speaker, camera support, and voice software.

The droid can be used as a physical assistant for astronomy tasks, website interaction, and future telescope workflows. It is designed to eventually respond through speech, receive commands, connect with StellaSim tools, and act as a real companion device for observing sessions.

## Observation Planner

The Observation Planner helps users prepare astronomy sessions.

Users can choose targets, set date and time information, enter location details, filter objects by visibility, check altitude, review observing windows, and save notes. The planner is designed to help users decide what to observe before using the telescope or Live Star Map.

It supports target organization, planning notes, visibility checks, and export-style observing preparation.

## Astro Notebook

Astro Notebook is a personal observing journal.

Users can save observing sessions with details about the target, telescope settings, eyepiece used, weather, seeing, transparency, location, notes, sketches, and images. It works as a field journal for astronomy sessions and helps users keep a long-term record of what they observed.

The notebook is designed for real observing workflow instead of casual note taking. Each session can store technical details and personal observations together.

## Exoplanet Explorer

The Exoplanet Explorer is an interactive database for studying confirmed exoplanets.

Users can search, filter, and compare planets by properties such as radius, mass, orbital period, distance, host star type, and habitability. It includes categories for planet types such as super-Earths, gas giants, hot Jupiters, and potentially habitable worlds.

The explorer displays planet cards, orbit visuals, Earth comparisons, and habitability-style summaries. It is designed for browsing real exoplanet data in a visual and understandable way.

## Mission Control

Mission Control tracks space missions and spacecraft activity.

It is designed to show current and upcoming missions from agencies and companies such as NASA, ESA, JAXA, ISRO, SpaceX, Rocket Lab, and other space organizations. It can display launch information, active spacecraft, planetary missions, lunar missions, Mars rovers, deep-space probes, and major observatories.

Mission Control gives StellaSim a central place for following real space exploration activity.

## Live Earth Tracker

The Live Earth Tracker displays satellites moving around Earth in real time.

It is designed to show satellite positions, orbital paths, object information, and Earth-centered motion. Users can view satellites as they move across the globe and inspect details about each object.

The tracker can support live satellite visualization, orbital data display, search, filtering, and information panels for satellites and spacecraft.

## FITS File Analyzer

The FITS File Analyzer is a tool for working with astronomical image files.

Users can load FITS files, inspect image data, adjust display settings, and analyze astronomical observations. It is designed for astronomy images from telescopes, research datasets, and observational projects.

The analyzer can support image stretching, brightness controls, metadata viewing, object inspection, and scientific image review.

## Astronomy News

The Astronomy News section displays astronomy and space-related updates.

It connects to a server route that can fetch and display news items inside StellaSim. This gives users a place to follow astronomy discoveries, space missions, telescope updates, and related science news.

## Lessons

The Lessons section is a learning area for astronomy and space science.

It is designed to teach topics through interactive lessons, guided explanations, practice questions, and visual examples. Lessons can connect with the rest of StellaSim so users can learn a concept and then test it inside the simulator or star map.

## Object Database

The Object Database is a searchable reference tool for astronomy objects.

It is designed to store information about stars, planets, moons, galaxies, nebulae, clusters, asteroids, comets, satellites, and other objects. Users can search for an object and view its properties, location data, visibility information, and related observing details.


## Project Structure

StellaSim is built with HTML, CSS, JavaScript, Node.js, and Express.

The frontend uses browser-based graphics and interactive interfaces. The backend serves the website, handles API routes, supports Stella AI requests, and provides routes for live data features such as astronomy news and telescope communication.

The project is structured around a `public` folder for website files and a Node server for backend functionality.


```text
StellaSim/
├── public/
│   ├── index.html
│   ├── live-star-map.html
│   ├── observation-planner.html
│   ├── exoplanet-explorer.html
│   ├── astronomy-news.html
│   ├── astro-notebook.html
│   ├── mission-control.html
│   ├── live-earth-tracker.html
│   ├── fits-analyzer.html
│   ├── stellasim-ai.html
│   ├── css/
│   ├── js/
│   └── assets/
├── server.js
├── package.json
└── README.md
```

## Server Routes

```text
/api/ai
```

Handles Stella AI requests.

```text
/api/news
```

Fetches astronomy news for the news section.

```text
/api/telescope/status
```

Checks telescope connection and status.

```text
/api/telescope/goto
```

Sends a GoTo command to the telescope integration.

## Local Setup

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

## Telescope Setup

The telescope integration can be tested in mock mode before connecting hardware.

When hardware is connected, StellaSim can communicate with the telescope backend through the telescope API routes. The Live Star Map can then be used as the visual interface for selecting targets and sending GoTo commands.

## Stella AI Droid Setup

The Stella AI Droid runs separately from the main website.

The droid uses a Raspberry Pi environment with voice input, speech output, and connection support for StellaSim. It can be expanded to communicate with the website, respond to astronomy questions, and support telescope workflows.

## Design

StellaSim uses a dark astronomy interface with blue accents, glass-style panels, glowing borders, and high-contrast controls.

The interface is designed to feel like a mission-control system while still being usable for learning, observing, and simulation work.

## Status

StellaSim is an active project.

Current working areas include the main simulator, Live Star Map, Stella AI, telescope integration, observation tools, exoplanet tools, astronomy news, and the Stella AI Droid.

Future work includes deeper telescope control, better observing workflows, expanded catalogs, more data tools, improved lessons, and stronger connection between the website and physical hardware.
