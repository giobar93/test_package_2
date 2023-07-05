import React from "react";
import RoleDataTable from "../RoleDataTable/RoleDataTable";
import VerticalCentered from "../VerticalCentered/VerticalCentered";
import HorizontalCentered from "../HorizontalCentered/HorizontalCentered";
import { Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material";
import RoleTableHead from "../RoleDataTable/RoleTableHead";



export default function RoleDataTableExample() {


    return <VerticalCentered>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableContainer >
                <RoleTableHead headers={headers}/>
                <RoleDataTable rows={data} />
            </TableContainer>
        </Table>
    </VerticalCentered>

}

const headers = [
    <p style={{fontWeight:"bold"}}>Permissions</p>,
    "Default_Role",
    "Admin",
    "Event_Admin",
    "Event_Reader",
    "Encoder_Admin",
    "Encoder_Reader",
]
const data = [
    {
        "rows": "encoder.create",
        "columns": [
            {
                "Default_Role": true,
                "isActive": false
            },
            {
                "Admin": true,
                "isActive": false
            },
            {
                "Event_Admin": false,
                "isActive": false
            },
            {
                "Event_Reader": false,
                "isActive": true
            },
            {
                "Encoder_Admin": true,
                "isActive": false
            },
            {
                "Encoder_Reader": false,
                "isActive": false
            }
        ]
    },
    {
        "rows": "encoder.delete",
        "columns": [
            {
                "Default_Role": true,
                "isActive": false
            },
            {
                "Admin": true,
                "isActive": false
            },
            {
                "Event_Admin": false,
                "isActive": false
            },
            {
                "Event_Reader": false,
                "isActive": true
            },
            {
                "Encoder_Admin": true,
                "isActive": false
            },
            {
                "Encoder_Reader": true,
                "isActive": false
            }
        ]
    },
    {
        "rows": "encoder.update",
        "columns": [
            {
                "Default_Role": true,
                "isActive": false
            },
            {
                "Admin": true,
                "isActive": false
            },
            {
                "Event_Admin": false,
                "isActive": false
            },
            {
                "Event_Reader": false,
                "isActive": true
            },
            {
                "Encoder_Admin": true,
                "isActive": false
            },
            {
                "Encoder_Reader": false,
                "isActive": false
            }
        ]
    },
    {
        "rows": "encoder.read",
        "columns": [
            {
                "Default_Role": true,
                "isActive": false
            },
            {
                "Admin": true,
                "isActive": false
            },
            {
                "Event_Admin": false,
                "isActive": false
            },
            {
                "Event_Reader": true,
                "isActive": true
            },
            {
                "Encoder_Admin": true,
                "isActive": false
            },
            {
                "Encoder_Reader": true,
                "isActive": false
            }
        ]
    }
]