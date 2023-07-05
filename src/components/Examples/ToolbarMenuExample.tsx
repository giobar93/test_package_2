import React from "react"

import ToolbarMenu from "../ToolbarMenu/ToolbarMenu"
import MenuItem from "../Menu/MenuItem"
import {faHand} from "@fortawesome/free-regular-svg-icons"

export default function ToolbarMenuExample() {
  return (
    <ToolbarMenu>
      <MenuItem text='Test' icon={faHand} />
    </ToolbarMenu>
  )
}
