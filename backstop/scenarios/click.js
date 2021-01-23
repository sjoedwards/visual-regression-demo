module.exports = (url) => [
  {
    label: "BackstopJS Homepage",
    url: `${url}`,
    misMatchThreshold: 0.1,
    selectors: ["body"],
  },
  {
    label: "BackstopJS Homepage -- Click",
    url: `${url}`,
    misMatchThreshold: 0.1,
    selectors: ["body"],
    clickSelector: "#race-tile__0",
    postInteractionWait: 2000,
  },
];
