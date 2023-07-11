import React from "react"
import type { Preview } from "@storybook/react"
import { StorybookWrapper } from "./StorybookWrapper"
import "../src/pages/global.scss"

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <StorybookWrapper>
          <Story />
        </StorybookWrapper>
      </>
    ),
  ],
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
