const http = require("http");
const { exec } = require("child_process");
const path = require("path");

const PORT = 8787;

// change these filenames if yours are named differently
const tools = {
  home: "index.html",
  starMap: "live-star-map.html",
  observationPlanner: "observation-planner.html",
  astroNotebook: "astro-notebook.html",
  missionControl: "mission-control.html",
  fitsAnalyzer: "fits-file-analysis.html",
  telescope: "telescope-control.html"
};

function openFile(fileName) {
  const fullPath = path.join(__dirname, "public", fileName);

  // windows open command
  exec(`start "" "${fullPath}"`, (error) => {
    if (error) {
      console.error("Open error:", error);
    }
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (url.pathname === "/status") {
    res.end(JSON.stringify({
      ok: true,
      message: "StellaSim bridge online"
    }));
    return;
  }

  if (url.pathname === "/open") {
    const tool = url.searchParams.get("tool");

    if (!tool || !tools[tool]) {
      res.statusCode = 400;
      res.end(JSON.stringify({
        ok: false,
        error: "Unknown tool",
        available: Object.keys(tools)
      }));
      return;
    }

    openFile(tools[tool]);

    res.end(JSON.stringify({
      ok: true,
      opened: tool,
      file: tools[tool]
    }));
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({
    ok: false,
    error: "Not found"
  }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`StellaSim bridge running at http://0.0.0.0:${PORT}`);
  console.log("Try opening: http://localhost:8787/status");
});