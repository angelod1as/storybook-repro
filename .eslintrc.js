module.exports = {
  root: true,
  plugins: [
    "lodash",
    "unused-imports",
    "cypress",
    "chai-friendly",
    "react-hooks",
    "no-only-tests",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ["*", "src/**/*"],
      extends: ["next", "next/core-web-vitals", "prettier"],
      env: {
        browser: true,
        node: true,
      },
      rules: {
        // Force self-closing components
        // Eg: <Comp /> instead of <Comp></Comp>
        "react/self-closing-comp": ["error"],
        // Only forbid braces as they have syntactical relevance.
        // Quotes are perfectly fine and escaping them would introduce unnecessary unclarity.
        "react/no-unescaped-entities": [
          "error",
          {
            forbid: [">", "}"],
          },
        ],
        // Ensure only individual functions are imported.
        "lodash/import-scope": ["error", "method"],
        // Enforce a convention in module import order
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
        "import/order": [
          "warn",
          {
            // sort the order within each group in alphabetical manner based on path.
            // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md#alphabetize-order-ascdescignore-caseinsensitive-truefalse
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
            // enforced order is the same as the order of each element in a group.
            // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md#groups-array
            groups: [
              "builtin",
              "external",
              "parent",
              ["sibling", "index"],
              "object",
              "unknown",
            ],
            // define imports from "src/" to be handled as "parent" group.
            pathGroups: [
              {
                group: "parent",
                pattern: "src/**",
              },
            ],
            // at least one new line between each group will be enforced, and new
            // lines inside a group will be forbidden.
            // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md#newlines-between-ignorealwaysalways-and-inside-groupsnever
            "newlines-between": "always-and-inside-groups",
          },
        ],
        // Does not work with a src folder.
        "@next/next/no-server-import-in-page": "off",
        // We're disabling this to avoid comment noise.
        // This is useful for the usage in higher order components which is
        // checked by typescript.
        // On native elements it is checked by React strict mode.
        "react/jsx-props-no-spreading": "off",
        // We are currently not using the Next.js image component.
        // It would be better to use Imgix.
        "@next/next/no-img-element": "off",
        // Destructuring often makes code unnessessarily verbose, hard to read, or hard to adjust.
        // Whether or not it is used should be up to the developer and context.
        "prefer-destructuring": "off",
        "react/destructuring-assignment": "off",
        // The Next.js build automatically adds the React import.
        "react/react-in-jsx-scope": "off",
        // There are often valid reasons to return a synchronous result from an async function,
        // especially if the asyncronicity is defined externally.
        "@typescript-eslint/require-await": "off",
        // Block style is sometimes desirable and this rule has issues with comments.
        "arrow-body-style": "off",
        // False-positive, the rule doesn't recognize .tsx
        "@next/next/no-document-import-in-page": "off",
        // Automatically remove unused imports
        // https://github.com/sweepline/eslint-plugin-unused-imports
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        // Helps you not to forget adding dependencies to react hooks
        // https://reactjs.org/docs/hooks-rules.html
        "react-hooks/exhaustive-deps": "warn",
      },
    },
    {
      files: ["src/**/*.test.*"],
      extends: [
        "next",
        "next/core-web-vitals",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "prettier",
      ],
      rules: {
        // Do not enforce to prevent missing displayName in a React component
        // definition for test files.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        "react/display-name": ["off"],
      },
    },
    {
      files: ["cypress/**/*", "src/**/*.e2e.*"],
      extends: [
        "next",
        "plugin:cypress/recommended",
        "plugin:chai-friendly/recommended",
        "prettier",
      ],
      env: {
        "cypress/globals": true,
      },
      rules: {
        "cypress/no-force": "warn",
        "cypress/no-async-tests": "error",
        "cypress/no-pause": "error",
        "no-restricted-imports": [
          "error",
          {
            patterns: ["src/"],
          },
        ],
        "no-only-tests/no-only-tests": "error",
      },
    },
  ],
  extends: ["plugin:storybook/recommended"],
}
