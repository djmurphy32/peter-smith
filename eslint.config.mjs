import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import vue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier/recommended";
import vuePrettier from "@vue/eslint-config-prettier";
import vueEslintParser from "vue-eslint-parser";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  prettier,
  ...vue.configs["flat/essential"],
  vuePrettier,
  {
    ignores: ["**/dist", "**/node_modules", "env"],
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: vueEslintParser,
      parserOptions: {
        parser: ts.parser,
        sourceType: "module",
        ecmaVersion: 2020,
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/valid-v-bind": "off",
      "vue/first-attribute-linebreak": [
        "error",
        {
          singleline: "ignore",
          multiline: "ignore",
        },
      ],
      "vue/no-parsing-error": [
        "error",
        {
          "x-invalid-namespace": false,
        },
      ],
    },
  },
  {
    files: ["**/*.ts", "**/*.mts"],
    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: ts.parser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
      },
    },
  },
  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": 0,
    },
  },
];
