import {IconButton, Tooltip} from "@mui/material"
import React, {ReactNode} from "react"
import {customIconTheme} from "../../common/layout"

type Props = {
    onClick?: (event?: any) => any
    tooltipText?: string
    customStyle?: object
    disabled?: boolean
    children?: ReactNode
}

export default function CustomIcon({children, onClick, tooltipText, customStyle = customIconTheme, disabled}: Props) {
    return (
        <Tooltip title={tooltipText}>
            <IconButton onClick={onClick} sx={customStyle} disableTouchRipple={disabled} disableFocusRipple={disabled}>
                {children}
            </IconButton>
        </Tooltip>
    )
}
