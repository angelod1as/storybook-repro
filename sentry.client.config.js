// This file configures the initialization of Sentry in the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

/**
 * All configuration options:
 * https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/
 * @type {Parameters<typeof Sentry.init>[0]}
 */
export const sentryConfig = {
  // ---------------------------
  // Basic Options
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/
  // ---------------------------

  // The DSN is public in nature since it needs to be used in the browser.
  // https://docs.sentry.io/product/sentry-basics/dsn-explainer/#dsn-utilization
  dsn: "https://bb0be5b5dd7a402bb6adc3719589d861@o1084982.ingest.sentry.io/6102355",

  // ---------------------------
  // Releases & Health
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/releases/
  // ---------------------------

  release: process.env.SENTRY_RELEASE,

  // ---------------------------
  // Environments
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/environments/
  // ---------------------------

  environment: process.env.SENTRY_ENVIRONMENT,

  // ---------------------------
  // Sampling
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/sampling/
  // ---------------------------

  sampleRate: 1.0,

  // ---------------------------
  // Fitlering
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/filtering/
  // ---------------------------

  tracesSampler: (context) => {
    if (context.parentSampled) {
      return context.parentSampled
    }
    // The automatic instrumentation of the Sentry Next.js integration creates a high trace volume
    // by automatically tracing HTTP requests, web vitals, and navigation events.
    // To avoid excessive tracing we're disabling it by default. All tracing should be intentional.
    // You can force a sample by making a transaction with `sampled: true`.
    // For more information on sampling traces, please see the docs:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/sampling/
    return 0
  },
  beforeSend(event, hint) {
    const error = hint?.originalException || hint?.syntheticException

    // Group errors by message alone.
    // By default, different stack traces result in separate errors.
    event.fingerprint =
      typeof error === "string"
        ? [error]
        : error instanceof Error
        ? [error.message]
        : event.fingerprint

    return event
  },
  ignoreErrors: [
    // Random plugins/extensions
    "top.GLOBALS",
  ],
  denyUrls: [
    // Chrome extensions
    /extensions\//i,
    /^chrome:\/\//i,
  ],
}

Sentry.init(sentryConfig)
