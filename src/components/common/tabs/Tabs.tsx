import {
  Root,
  Item,
  ToggleGroupSingleProps as RadixToggleGroupSingleProps,
  ToggleGroupMultipleProps as RadixToggleGroupMultipleProps,
  ToggleGroupItemProps as RadixToggleGroupItemProps,
} from "@radix-ui/react-toggle-group"
import { Children, FC } from "react"

import { create } from "src/helpers/bem"

import styles from "./Tabs.module.scss"

const bem = create(styles, "Tabs")

export type TabsProps =
  | RadixToggleGroupSingleProps
  | RadixToggleGroupMultipleProps
export type TabItemProps = RadixToggleGroupItemProps

export const TabItem: FC<TabItemProps> = ({
  className,
  children,
  ...otherProps
}) => {
  const childrenArray = Children.toArray(children)
  const isStringChild =
    childrenArray.length === 1 && typeof childrenArray[0] === "string"

  return (
    <Item className={bem("item", undefined, className)} {...otherProps}>
      {isStringChild ? (
        <div className={bem("item__label")}>{children}</div>
      ) : (
        children
      )}
    </Item>
  )
}

export const Tabs: FC<TabsProps> = ({ className, ...otherProps }) => {
  return (
    <Root className={bem(undefined, undefined, className)} {...otherProps} />
  )
}
