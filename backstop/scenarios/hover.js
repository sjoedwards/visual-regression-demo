module.exports = (url) => [
  {
    label: "BackstopJS Homepage -- No Hover",
    url: `${url}`,
    misMatchThreshold: 0.1,
    selectors: ["body"],
  },
  {
    label: "BackstopJS Homepage -- Hover",
    url: `${url}`,
    misMatchThreshold: 0.1,
    selectors: ["body"],
    hoverSelector: "#race-tile__0",
    postInteractionWait: 2000,
  },
];
