import React from "react";
import RoleDataTable from "../RoleDataTable/RoleDataTable";
import VerticalCentered from "../VerticalCentered/VerticalCentered";
import HorizontalCentered from "../HorizontalCentered/HorizontalCentered";
import { Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material";
import RoleTableHead from "../RoleDataTable/RoleTableHead";


type Props = {
    data:object[],
    headers:object[]
}

export default function DataTable({data,headers}:Props) {



    return <VerticalCentered>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableContainer >
            {headers && headers.length > 0 && 
                <RoleTableHead headers={headers}/>
            
            }
            <RoleDataTable rows={data} />
            </TableContainer>
        </Table>
    </VerticalCentered>

}