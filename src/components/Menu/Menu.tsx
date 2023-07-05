import React, { ReactNode } from "react";
import { Menu } from "@mui/material";


type Props = {
    handleCloseHorizIcon:(x?:any)=>any,
    anchorEl?:(x?:any)=>any,
    open:boolean,
    children:ReactNode
}


export default function SingleMenu({anchorEl,open,handleCloseHorizIcon,children}:Props){
    return (
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseHorizIcon}
        >
          {children}
        </Menu>
      );
}