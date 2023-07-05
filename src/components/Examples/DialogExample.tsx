import { Button } from "@mui/material";
import React, { useState } from "react";
import BasicDialog from "../BasicDialog/BasicDialog";

export default function DialogExample({text}:any){

    const [isOpen,setIsOpen] = useState(false)
    
    function handleOnClick(){
        setIsOpen(!isOpen)
    }


    return <>
        <Button onClick={handleOnClick}>{text}</Button>
        <BasicDialog title={"Title"} isOpen={isOpen} handleClose={handleOnClick} handleConfirm={handleOnClick}> <p>Children</p></BasicDialog>
        
    </>
}