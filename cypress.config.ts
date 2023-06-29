import { defineConfig } from "cypress"

export default defineConfig({
  chromeWebSecurity: false,
  projectId: "8wqyyz",
  retries: {
    openMode: 0,
    runMode: 2,
  },
  videoCompression: 10,
  viewportHeight: 568,
  viewportWidth: 320,
  requestTimeout: 60000,
  responseTimeout: 60000,
  scrollBehavior: "center",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.ts")(on, config)
    },
    baseUrl: "http://localhost:3000",
    specPattern: ["./cypress/integration/**/*.e2e.ts", "src/**/*.e2e.ts"],
  },
})
