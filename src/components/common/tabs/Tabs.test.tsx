import { render } from "src/tests"

import { Tabs, TabItem } from "./Tabs"

describe("The toggle group component", () => {
  it("should render single select toggle group", () => {
    const { container } = render(
      <Tabs type="single" defaultValue="Hi">
        <TabItem value="Hello">Hello</TabItem>
        <TabItem value="Hi">Hi</TabItem>
        <TabItem value="Goodbye">Goodbye</TabItem>
      </Tabs>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render multiple select toggle group", () => {
    const { container } = render(
      <Tabs type="multiple" defaultValue={["Hi", "Goodbye"]}>
        <TabItem value="Hello">Hello</TabItem>
        <TabItem value="Hi">Hi</TabItem>
        <TabItem value="Goodbye">Goodbye</TabItem>
      </Tabs>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render toggle group with custom items", () => {
    const { container } = render(
      <Tabs type="single" defaultValue="circle">
        <TabItem value="square">
          <div
            style={{
              width: "10px",
              height: "10px",
              background: "red",
              margin: "10px",
            }}
          />
        </TabItem>
        <TabItem value="circle">
          <div
            style={{
              width: "10px",
              height: "10px",
              background: "blue",
              borderRadius: "50%",
              margin: "10px",
            }}
          />
        </TabItem>
        <TabItem value="triangle">
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderBottom: "10px solid green",
              margin: "10px",
            }}
          />
        </TabItem>
      </Tabs>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render toggle group with no selected value", () => {
    const { container } = render(
      <Tabs type="single">
        <TabItem value="Hello">Hello</TabItem>
        <TabItem value="Hi">Hi</TabItem>
        <TabItem value="Goodbye">Goodbye</TabItem>
      </Tabs>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
