import {IconButton, Tooltip} from "@mui/material"
import React, {ReactNode} from "react"

type Props = {
    onClick: (event?: any) => any
    tooltipText?: string
    customStyle?: object
    disabled?: boolean
    children?: ReactNode
}
const style = {
    color: "#133c70",
    border: "1px solid  #133c70",
    borderRadius: "10px",
}

export default function CustomIcon({children, onClick, tooltipText, customStyle = style, disabled}: Props) {
    return (
        <Tooltip title={tooltipText}>
            <IconButton onClick={onClick} sx={customStyle} disableTouchRipple={disabled} disableFocusRipple={disabled}>
                {children}
            </IconButton>
        </Tooltip>
    )
}
