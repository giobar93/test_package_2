import {ListItem} from "@mui/material"
import React from "react"
import MoreVert from "@mui/icons-material/MoreVert"

import CustomIcon from "../CustomIcon/CustomIcon"

type Props = {
    handleClick?: (x?: any) => any
    styleAvatar?: object
}

export default function SingleListAvatarItem({handleClick, styleAvatar}: Props) {
    return (
        <ListItem>
            <CustomIcon onClick={handleClick} customStyle={styleAvatar}>
                <MoreVert />
            </CustomIcon>
        </ListItem>
    )
}
