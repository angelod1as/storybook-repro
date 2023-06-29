import type { Meta, StoryObj } from "@storybook/react"

import { TabItem, Tabs } from "./Tabs"

const meta: Meta<typeof Tabs> = {
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  render: () => (
    <Tabs type="single" defaultValue="Hello">
      <TabItem value="Hello">Hello</TabItem>
      <TabItem value="Goodbye">Goodbye</TabItem>
    </Tabs>
  ),
}
