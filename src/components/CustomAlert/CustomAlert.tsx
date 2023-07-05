import {Alert, AlertTitle} from "@mui/material"
import React from "react"

export enum Colors {
  error,
  warning,
  info,
  success,
}
export type AlertColor = "success" | "info" | "warning" | "error"
type Props = {
  title?: string
  text?: string
  color?: "success" | "info" | "warning" | "error"
}
export default function CustomAlert({text = "Alert message", color = "success", title = "Warning"}: Props) {
  return (
    <Alert sx={{width: "100%"}} severity={color}>
      <AlertTitle>
        <strong>{title}</strong>
      </AlertTitle>
      {text}
    </Alert>
  )
}
