import { Stack } from "@mui/material";
import React,{ReactNode} from "react";

type Props = {
    spacing?:number,
    children?:ReactNode
}

export default function VerticalCentered({spacing=1,children=<><p>El1</p><p>El2</p></>}:Props) {
    return <Stack direction="column" justifyContent="center" alignItems="center" spacing={spacing?spacing:1}>
                {children}
            </Stack>
}