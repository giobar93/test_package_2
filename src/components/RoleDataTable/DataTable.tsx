import React from "react"
import RoleDataTable from "../RoleDataTable/RoleDataTable"
import VerticalCentered from "../VerticalCentered/VerticalCentered"
import {Table, TableContainer} from "@mui/material"
import RoleTableHead from "../RoleDataTable/RoleTableHead"

type Props = {
    data: object[]
    headers: object[]
    handleChange: (x: any) => any
}

export default function DataTable({data, headers, handleChange}: Props) {
    return (
        <VerticalCentered>
            <Table sx={{minWidth: 650}} aria-label='simple table'>
                <TableContainer>
                    {headers && headers.length > 0 && <RoleTableHead headers={headers} />}
                    <RoleDataTable rows={data} handleChange={handleChange} />
                </TableContainer>
            </Table>
        </VerticalCentered>
    )
}
