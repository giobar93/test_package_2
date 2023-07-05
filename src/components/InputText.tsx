import React from "react"

type Props = {
  text?: string
}

export default function InputText({text = ""}: Props) {
  return <p>{text}</p>
}
