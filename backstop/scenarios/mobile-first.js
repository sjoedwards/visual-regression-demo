module.exports = (url) => [
  {
    label: "BackstopJS Homepage Multi Viewports",
    url: `${url}`,
    misMatchThreshold: 0.1,
    viewports: [
      {
        label: "default",
        width: 1920,
        height: 1080,
      },
      {
        label: "tablet",
        width: 768,
        height: 1024,
      },
      {
        label: "phone",
        width: 320,
        height: 480,
      },
    ],
  },
];
