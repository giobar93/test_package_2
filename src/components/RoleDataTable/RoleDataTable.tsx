import * as React from "react"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import CheckBoxItem from "../CheckboxItem/CheckboxItem"
type Props = {
    rows: object[]
    handleChange: (x: any) => any
}
export default function RoleDataTable({rows, handleChange}: Props) {
    return (
        <TableBody>
            {rows.map((row: any, index: number) => (
                <TableRow key={index}>
                    <TableCell
                        align='left'
                        style={{
                            minWidth: "20vw",
                            width: "20vw",
                            fontWeight: row.principalPermission ? "bold" : "",
                        }}
                    >
                        {row.rows}
                    </TableCell>
                    {row.columns.map((lr: any, index: number) => {
                        return (
                            <TableCell key={index} align='center' style={{width: "10vw"}}>
                                <CheckBoxItem
                                    defaultValue={
                                        Object.keys(lr)[0] == "Default_Role" || !Object.values(lr)[1] ? true : false
                                    }
                                    disabled={true}
                                    isChecked={Object.values(lr)[0] ? true : false}
                                    checkBoxId={index.toString()}
                                    handleChange={handleChange}
                                />
                            </TableCell>
                        )
                    })}
                </TableRow>
            ))}
        </TableBody>
    )
}
