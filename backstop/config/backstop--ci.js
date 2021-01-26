const Scenarios = require("../scenarios/ci");
const url = process.env.URL || "http://localhost:3000";

module.exports = {
  id: "laceup_ci",
  viewports: [
    {
      label: "default",
      width: 1920,
      height: 1080,
    },
  ],

  scenarios: [...Scenarios(url)],
  paths: {
    bitmaps_reference: "backstop/reference",
    bitmaps_test: "backstop/results",
    engine_scripts: "backstop/engine_scripts",
    html_report: "backstop/html_report/ci",
    ci_report: "backstop/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
};
