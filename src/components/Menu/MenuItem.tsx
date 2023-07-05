import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect ,ReactNode} from "react";
import './MenuItem.css';
import ListItemButton  from "@mui/material/ListItemButton";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
    handleClick?:() => any
    icon:IconProp
    text?:string
    alert?:boolean
    color?:"red" | "green"
}
export default function MenuItem({ handleClick, icon, text, alert, color }:Props) {
    useEffect(() => {

    }, [color])

    function performHandleClick(){
        if (handleClick){
            handleClick()
        }
    }
    return <ListItemButton style={{padding:0}} onClick={performHandleClick} className={alert?(color?color:'alert'):'default'}> 
        <FontAwesomeIcon  icon={icon} className="rainbow-m-right_medium" />
            {text}
    </ListItemButton>


}