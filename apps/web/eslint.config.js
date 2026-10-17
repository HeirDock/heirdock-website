import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Styling goes through classes and the tokens in src/styles/tokens.css,
    // so pages and components can't drift from the design system. A truly
    // dynamic style needs an eslint-disable-next-line with a "-- reason".
    files: ["src/**/*.tsx"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='style']",
          message: "No inline styles: add a class (values come from src/styles/tokens.css).",
        },
        {
          selector: "Literal[value=/^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/]",
          message: "No raw hex colors: use a token from src/styles/tokens.css.",
        },
        {
          selector: "Literal[value=/^(?:rgb|hsl)a?\\(/]",
          message: "No raw rgb()/hsl() colors: use a token from src/styles/tokens.css.",
        },
      ],
    },
  }
);
