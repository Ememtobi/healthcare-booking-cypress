const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/*.js',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/reports/mochareports/assets'
  },
  
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/reports/mocha",
        "quite": true,
        "overwrite": false,
        "html": false,
        "json": true
      }
  }
});
