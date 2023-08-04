import {Button, ListItem, ListItemText, Typography} from "@mui/material"
import React, {useState} from "react"
import BasicDialog from "../BasicDialog/BasicDialog"
import Element from "../Element/Element"
import SingleListTextItem from "../List/SingleListTextItem"

export default function ElementExample() {
    return (
        <Element>
            <SingleListTextItem
                keyStyle={{backgrounColor: "blue"}}
                valueStyle={{backgroundColor: "green"}}
                item={{name: "Name", value: "Value"}}
            />
            <SingleListTextItem />
        </Element>
    )
}
