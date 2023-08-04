import {Card, Grid} from "@mui/material"
import React, {ReactNode} from "react"
import {elementStyle} from "../../common/layout"

type Props = {
    children?: ReactNode
    style?: object
}

export default function Element({children, style = elementStyle}: Props) {
    return (
        <>
            <Card sx={style}>
                <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item xs={12}>
                        {children}
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}
