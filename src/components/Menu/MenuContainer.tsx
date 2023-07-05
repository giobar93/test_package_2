import React, {ReactNode} from "react"
import {MenuItem} from "@mui/material"

type Props = {
  index?: number
  disabled?: boolean
  children: ReactNode
}
export default function MenuContainer({index, children, disabled}: Props) {
  return (
    <MenuItem key={index} style={{backgroundColor: "white"}} disabled={disabled}>
      {children}
    </MenuItem>
  )
}
