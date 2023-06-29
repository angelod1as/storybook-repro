import type { Preview } from "@storybook/react"

// import "../src/styles/designsystem/_config.scss"

// UI mixins
import "../src/styles/ui/mixins/_accessibility.scss"
import "../src/styles/ui/mixins/_container.scss"
import "../src/styles/ui/mixins/_grid.scss"
import "../src/styles/ui/mixins/_richtext.scss"

// Design System

// -- Mixins
import "../src/styles/designsystem/mixins/_spread-map.scss"
import "../src/styles/designsystem/mixins/_screens.scss"
import "../src/styles/designsystem/mixins/_texts.scss"
import "../src/styles/designsystem/mixins/_borders.scss"

// -- Variables
import "../src/styles/designsystem/config/_colors-variables.scss"
import "../src/styles/designsystem/config/_colors-theme-1.scss"
import "../src/styles/designsystem/config/_colors-theme-2.scss"
import "../src/styles/designsystem/config/_borders.scss"
import "../src/styles/designsystem/config/_color.scss"
import "../src/styles/designsystem/config/_elevation.scss"
import "../src/styles/designsystem/config/_icons.scss"
import "../src/styles/designsystem/config/_layers.scss"
import "../src/styles/designsystem/config/_screens.scss"
import "../src/styles/designsystem/config/_spaces.scss"
import "../src/styles/designsystem/config/_texts-variables.scss"
import "../src/styles/designsystem/config/_texts-theme-1.scss"
import "../src/styles/designsystem/config/_texts-theme-2.scss"
import "../src/styles/designsystem/config/_texts.scss"
import "../src/styles/designsystem/config/_timings.scss"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
