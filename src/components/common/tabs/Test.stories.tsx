import type { Meta, StoryObj } from "@storybook/react"

const Test = () => <div>Testing!</div>

const meta: Meta<typeof Test> = {
  component: Test,
}

export default meta
type Story = StoryObj<typeof Test>

export const Primary: Story = {
  render: () => <Test />,
}
