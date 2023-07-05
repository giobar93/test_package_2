import React from "react"
import ErrorPage from "../../assets/401/error_401.png"

export default function Unauthorized() {
  return (
    <div
      style={{
        padding: "10px",
        textAlign: "center",
      }}
    >
      <img src={ErrorPage} />
    </div>
  )
}
