module.exports = (url) => [
  {
    label: "BackstopJS Homepage -- Async",
    url: `${url}?async`,
    misMatchThreshold: 0.1,
    selectors: ["body"],
  },
  {
    label: "BackstopJS Homepage -- Async -- Delay",
    url: `${url}?async`,
    misMatchThreshold: 0.1,
    selectors: ["body"],
    delay: 3000,
  },
];
