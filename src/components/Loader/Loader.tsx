import React from "react"
import {ThreeDots} from "react-loader-spinner"
import {colorDefault} from "../../common/layout"

type Props = {
    heigth?: number
    width?: number
    radius?: number
    color?: string
    visible?: boolean
}
export default function Loader({
    heigth = 80,
    width = 80,
    radius = 9,
    color = colorDefault.blue,
    visible = true,
}: Props) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ThreeDots
                height={heigth}
                width={width}
                radius={radius}
                color={color}
                ariaLabel='three-dots-loading'
                visible={visible}
            />
        </div>
    )
}
