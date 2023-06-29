import { FC } from "react"

import { Tabs, TabItem } from "src/components/common/tabs"

import { DemoLayout } from "src/components/demo/layout"
import { DemoSection } from "src/components/demo/section"

export const DemoPage: FC = () => {
  return (
    <DemoLayout>
      <DemoSection
        title="Single Select Tabs"
        description="Single select tabs with value set"
      >
        <Tabs type="single" defaultValue="Hello">
          <TabItem value="Hello">Hello</TabItem>
          <TabItem value="Goodbye">Goodbye</TabItem>
        </Tabs>
      </DemoSection>
      <DemoSection
        title="Multiple Select Tabs"
        description="Multiple select tabs with value set"
      >
        <Tabs type="multiple" defaultValue={["Hi", "Goodbye"]}>
          <TabItem value="Hello">Hello</TabItem>
          <TabItem value="Hi">Hi</TabItem>
          <TabItem value="Goodbye">Goodbye</TabItem>
        </Tabs>
      </DemoSection>
      <DemoSection
        title="Custom TabItem"
        description="Custom toggle tabs instead of text"
      >
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
          <TabItem value="parallelogram">
            <div
              style={{
                width: "10px",
                height: "10px",
                transform: "skew(20deg)",
                background: "yellow",
                margin: "10px",
              }}
            />
          </TabItem>
        </Tabs>
      </DemoSection>
    </DemoLayout>
  )
}
