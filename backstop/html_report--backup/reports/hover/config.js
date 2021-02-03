report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../reference/laceup_default_BackstopJS_Homepage_--_No_Hover_0_body_0_default.png",
        "test": "../../results/20210203-214528/laceup_default_BackstopJS_Homepage_--_No_Hover_0_body_0_default.png",
        "selector": "body",
        "fileName": "laceup_default_BackstopJS_Homepage_--_No_Hover_0_body_0_default.png",
        "label": "BackstopJS Homepage -- No Hover",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "expect": 0,
        "viewportLabel": "default",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.83",
          "analysisTime": 63
        },
        "diffImage": "../../results/20210203-214528/failed_diff_laceup_default_BackstopJS_Homepage_--_No_Hover_0_body_0_default.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../reference/laceup_default_BackstopJS_Homepage_--_Hover_0_body_0_default.png",
        "test": "../../results/20210203-214528/laceup_default_BackstopJS_Homepage_--_Hover_0_body_0_default.png",
        "selector": "body",
        "fileName": "laceup_default_BackstopJS_Homepage_--_Hover_0_body_0_default.png",
        "label": "BackstopJS Homepage -- Hover",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "expect": 0,
        "viewportLabel": "default",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "laceup_default"
});