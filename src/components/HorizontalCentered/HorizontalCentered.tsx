import { Stack } from "@mui/material";
import React,{ReactNode} from "react";

type Props = {
    spacing?:number,
    children?:ReactNode

}

export default function HorizontalCentered({spacing=1,children=<><p>El1</p><p>El2</p></>}:Props) {
    return <Stack direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={spacing}>
            {children}
    </Stack>

}