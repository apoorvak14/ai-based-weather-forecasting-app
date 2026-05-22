const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const requiredFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "data/sample-sales.csv"
];

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const data = fs.readFileSync(path.join(root, "data/sample-sales.csv"), "utf8");

[
  "buildForecast",
  "generateInsights",
  "drawForecastChart",
  "parseCsv"
].forEach((token) => {
  if (!app.includes(token)) {
    throw new Error(`Missing expected app function: ${token}`);
  }
});

[
  "forecastChart",
  "categoryChart",
  "insightList",
  "recordsTable"
].forEach((token) => {
  if (!html.includes(token)) {
    throw new Error(`Missing expected UI element: ${token}`);
  }
});

const rows = data.trim().split(/\r?\n/);
if (rows.length < 25) {
  throw new Error("Sample dataset should include at least 24 rows plus header.");
}

console.log("Smoke test passed.");
