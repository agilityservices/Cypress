import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import browserify from "@badeball/cypress-cucumber-preprocessor";
//@badeball/cypress-cucumber-preprocessor/browserify
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'


async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    defaultCommandTimeout:10000,
    specPattern:"**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
function createBundler(arg0: { plugins: any[]; }): (file: Cypress.FileObject) => string | Promise<string> {
  throw new Error("Function not implemented.");
}

