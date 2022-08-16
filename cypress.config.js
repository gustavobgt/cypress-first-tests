const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bwvz7g',
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
