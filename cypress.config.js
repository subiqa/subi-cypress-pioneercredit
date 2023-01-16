const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hv99oh',
  e2e: {
    const : cucumber = require('cypress-cucumber-preprocessor').default,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    env: {
      base_url: 'https://pioneercredit.com.au/'
    }
  }
});
