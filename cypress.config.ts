/* eslint-disable import/no-extraneous-dependencies */
import codeCoverageTask from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    baseUrl: 'http://localhost:3001',
  },
  video: false,
  experimentalFetchPolyfill: true,
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: false,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
  setupNodeEvents(on, config) {
    codeCoverageTask(on, config);

    return config;
  },
});
