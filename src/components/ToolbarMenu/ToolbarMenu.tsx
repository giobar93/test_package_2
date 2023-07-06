import React, {ReactNode} from "react"

import {MoreVert} from "@mui/icons-material"
import CustomIcon from "../CustomIcon/CustomIcon"
import Menu from "../Menu/Menu"
import MenuContainer from "../Menu/MenuContainer"
type Props = {
    children: ReactNode
}

export default function ToolbarMenu({children = undefined}: Props) {
    const [anchorEl, setAnchorEl] = React.useState(undefined)

    const handleClose = () => {
        setAnchorEl(undefined)
    }

    function handleMenu(event: any): any {
        setAnchorEl(event.currentTarget)
    }

    return (
        <div>
            <CustomIcon onClick={handleMenu}>
                <MoreVert />
            </CustomIcon>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} handleCloseHorizIcon={handleClose}>
                <MenuContainer>{children}</MenuContainer>
            </Menu>
        </div>
    )
}
