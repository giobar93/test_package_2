import React from "react"
import image from "./error_401.png"
export default function Unauthorized() {
    return (
        <div
            style={{
                padding: "10px",
                textAlign: "center",
            }}
        >
            <img src={image} />
        </div>
    )
}
