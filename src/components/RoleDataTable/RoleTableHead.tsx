import {TableCell, TableHead} from "@mui/material"
import React from "react"

type Props = {
    headers: any[]
}

export default function RoleTableHead({headers}: Props) {
    return (
        <TableHead>
            {headers.map((el: any, i: number) => {
                if (i == 0) {
                    return (
                        <TableCell key={i} align='left' style={{minWidth: "20vw", width: "20vw", fontWeight: ""}}>
                            {el}
                        </TableCell>
                    )
                }

                return (
                    <TableCell key={i} align='center' style={{width: "10vw", fontWeight: ""}}>
                        {el}
                    </TableCell>
                )
            })}
        </TableHead>
    )
}
