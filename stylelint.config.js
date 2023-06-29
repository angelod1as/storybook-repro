module.exports = {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    // Require or disallow a space before @else if parentheses.
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before/README.md
    "scss/at-else-if-parentheses-space-before": "never",

    // Require or disallow a space before @function parentheses.
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md
    "scss/at-function-parentheses-space-before": "never",

    // Require or disallow a space before @mixin parentheses.
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before/README.md
    "scss/at-mixin-parentheses-space-before": "never",

    // Enforces kebab-case or regex as variable name pattern
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md
    "scss/dollar-variable-pattern": null,

    // Specify a pattern for Sass/SCSS-like mixin names.
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md
    "scss/at-mixin-pattern": null,

    // Do not enforce empty lines before variables
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md
    "scss/dollar-variable-empty-line-before": null,

    // Require or disallow an empty line before declarations.
    // https://stylelint.io/user-guide/rules/declaration-empty-line-before
    "declaration-empty-line-before": null,

    // Disallows the use of global function names.
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md
    "scss/no-global-function-names": null,

    // Disallow redundant longhand properties within declaration-block.
    // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: ["grid-template"],
      },
    ],

    // Require or disallow parentheses in argumentless @mixin calls.
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md
    "scss/at-mixin-argumentless-call-parentheses": "always",

    // // // // // / //
    //   FROM ESPI  //
    // // // // // //

    // Require or disallow an empty line before at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    "at-rule-empty-line-before": [
      "always",
      {
        ignore: [
          "after-comment",
          "first-nested",
          "blockless-after-same-name-blockless",
        ],
      },
    ],

    // Require or disallow an empty line before the closing brace of blocks.
    // https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before
    "block-closing-brace-empty-line-before": null,

    // There must always be an empty line before rules, except on first nested.
    // https://stylelint.io/user-guide/rules/rule-empty-line-before
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
      },
    ],

    // Disallow !important within declarations.
    // https://stylelint.io/user-guide/rules/declaration-no-important
    "declaration-no-important": true,

    // Disallow shorthand properties that override related longhand properties.
    // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
    "declaration-block-no-shorthand-property-overrides": true,

    // Specify whether or not quotation marks should be used around font family names.
    // Quotes are recommended in the spec with "font family names
    // that contain white space, digits, or punctuation characters other than hyphens".
    // https://stylelint.io/user-guide/rules/font-family-name-quotes
    "font-family-name-quotes": "always-where-recommended",

    // Colors must never be named.
    // https://stylelint.io/user-guide/rules/color-named
    "color-named": "never",

    // Require or disallow an empty line before comments.
    // https://stylelint.io/user-guide/rules/comment-empty-line-before
    "comment-empty-line-before": null,

    // Specify short or long notation for hex colors.
    // https://stylelint.io/user-guide/rules/color-hex-length
    "color-hex-length": "long",

    // There must always be whitespace inside the markers.
    // https://stylelint.io/user-guide/rules/comment-whitespace-inside
    "comment-whitespace-inside": "always",

    // Urls must always be quoted.
    // https://stylelint.io/user-guide/rules/function-url-quotes
    "function-url-quotes": "always",

    // Disallow duplicate selectors within a stylesheet.
    // https://stylelint.io/user-guide/rules/no-duplicate-selectors
    "no-duplicate-selectors": true,

    // Limit the number of decimal places allowed in numbers.
    // https://stylelint.io/user-guide/rules/number-max-precision
    "number-max-precision": 4,

    // Disallow redundant values in shorthand properties. (e.g. margin / padding)
    // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
    "shorthand-property-no-redundant-values": true,

    // Disallow qualifying a selector by type. Allow attribute selectors qualified by type.
    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type
    "selector-no-qualifying-type": [true, { ignore: "attribute" }],

    // Limit the number of ID selectors in a selector
    // https://stylelint.io/user-guide/rules/selector-max-id
    "selector-max-id": 0,

    // Limit the number of universal selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-universal
    "selector-max-universal": 1,

    // Disallow vendor prefixes for selectors.
    // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
    "selector-no-vendor-prefix": true,

    // Disallow vendor prefixes for properties.
    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix
    "property-no-vendor-prefix": true,

    // Limit the depth of nesting.
    // https://stylelint.io/user-guide/rules/max-nesting-depth
    "max-nesting-depth": 3,

    // Specify lowercase or uppercase for keywords values.
    // https://stylelint.io/user-guide/rules/value-keyword-case
    "value-keyword-case": [
      "lower",
      {
        ignoreKeywords: ["currentColor"],
      },
    ],

    // Specify modern or legacy notation for color-functions.
    // https://stylelint.io/user-guide/rules/color-function-notation/
    "color-function-notation": null,

    // SCSS

    // Disallow unknown at-rules in favour of scss/at-rule-no-unknown.
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    "at-rule-no-unknown": null,

    // Disallow unknown at-rules in sass files.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-rule-no-unknown
    "scss/at-rule-no-unknown": true,

    // Specify blacklist of disallowed file extensions for partial names in @import commands.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md
    "scss/at-import-partial-extension-blacklist": null,

    // Require or disallow an empty line before at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    "at-rule-empty-line-before": [
      "always",
      {
        except: [
          "blockless-after-same-name-blockless",
          "blockless-after-blockless",
          "first-nested",
        ],
        ignore: ["after-comment"],
        ignoreAtRules: ["if", "else if", "else", "return"],
      },
    ],
  },
}
