import React, { FC, PropsWithChildren } from "react"
import { useTheme } from "../src/helpers/useTheme"

export const StorybookWrapper: FC<PropsWithChildren> = ({ children }) => {
  useTheme()

  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
