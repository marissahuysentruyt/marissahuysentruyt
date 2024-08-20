import js from "@eslint/js";
import pluginCypress from 'eslint-plugin-cypress/flat';

export default [
  js.configs.recommended,
  pluginCypress.configs.recommended,
  {
    ignores: ["node_modules", "dist", "/cypress", ".eleventy.js", "*.config.js", "img"]
  },
  {
    files: ["src/**/*.js"]
  },
  {
    rules: {
      "import/prefer-default-export": 0,
      "no-unused-vars": "warn",
      "no-plusplus": "off",
    }
  },
];
