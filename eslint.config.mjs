import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
      "**/*.sass",
      "**/*.css",
      "**/*.html",
    ],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error",
    },
  },
]);
