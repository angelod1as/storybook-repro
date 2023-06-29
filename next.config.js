const bundleAnalyzer = require("@next/bundle-analyzer")
const { withSentryConfig } = require("@sentry/nextjs")
const composePlugins = require("next-compose-plugins")
const { withPlugins } = composePlugins.extend(() => ({}))
const fonts = require("next-fonts")

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  compress: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
  experimental: {
    // All three options are blocked by https://github.com/vercel/next.js/issues/31492
    // reactRoot: true,
    // concurrentFeatures: true,
    // serverComponents: true,
  },
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    localeDetection: false,
  },
  sassOptions: {
    prependData: [
      '@import "src/styles/designsystem/mixins";',
      '@import "src/styles/designsystem/config";',
      '@import "src/styles/ui/mixins";',
    ].join("\n"),
  },
  webpack: (config) => {
    // Configure webpack to use SVGR for SVG files. This allows us to import
    // SVGs as React component and base46 string in typescript/javascript files:
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
        },
        {
          loader: "url-loader",
        },
      ],
    })

    return config
  },
  env: {},
}

const plugins = [
  // https://github.com/rohanray/next-fonts
  [fonts],
  // https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer
  process.env.ANALYZE === "true" && [bundleAnalyzer()],
].filter(Boolean)

/**
 * For all available options, see: https://github.com/getsentry/sentry-webpack-plugin#options
 * @type {Parameters<typeof withSentryConfig>[1]}
 */
const sentryOptions = {}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
// For integration docs, see: https://docs.sentry.io/platforms/javascript/guides/nextjs/
const moduleExports = withPlugins(plugins, nextConfig)
const sentryEnabled = process.env.SENTRY_ENABLED === "true"

module.exports = sentryEnabled
  ? withSentryConfig(moduleExports, sentryOptions)
  : moduleExports
