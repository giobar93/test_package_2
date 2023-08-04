import React from "react"
import {ListItem, ListItemText, Typography} from "@mui/material"
import {DateToStringFormat} from "../../common/utils"

type item = {
    name: any
    value: any
}
type Props = {
    item: item
    keyStyle?: object
    valueStyle?: object
    isDate?: boolean
}
export default function SingleListTextItem({
    item = {name: "Head", value: "sub"},
    keyStyle = {},
    valueStyle = {},
    isDate = false,
}: Props) {
    return (
        <ListItem component='div'>
            <ListItemText
                primary={<Typography style={keyStyle}>{item.name}</Typography>}
                secondary={
                    <Typography style={valueStyle}>
                        {(isDate && DateToStringFormat(item.value)) || item.value}
                    </Typography>
                }
            />
        </ListItem>
    )
}
