import React, {ReactNode} from "react"
import {ListItemAvatar, Checkbox} from "@mui/material"
import {useEffect} from "react"
import {colorDefault} from "../../common/layout"

type Props = {
    checkBoxId?: string
    handleChange: (x?: any) => any
    icon?: ReactNode
    checkedIcon?: ReactNode
    data?: object
    isChecked?: boolean
    disabled?: boolean
    defaultValue?: boolean
}

export default function CheckBoxItem({
    checkBoxId,
    handleChange,
    icon,
    checkedIcon,
    data,
    isChecked = false,
    disabled,
    defaultValue,
}: Props) {
    const [checked, setChecked] = React.useState(isChecked)
    const [listCk, setListCk] = React.useState(false)

    const changeChecked = (value: any) => {
        setChecked(!checked)
        const obj = {
            checked,
            value,
            listCk,
        }
        handleChange(obj)
    }

    useEffect(() => {
        setChecked(isChecked)
        setListCk(isChecked)
    }, [isChecked])

    useEffect(() => {
        setListCk(isChecked)
    }, [])

    return (
        <ListItemAvatar>
            <Checkbox
                inputProps={{"aria-label": "controlled"}}
                id={checkBoxId}
                onChange={() => changeChecked(data)}
                checked={checked}
                sx={{
                    alignItems: "center",
                    color: colorDefault.blue,
                    "&.Mui-checked": {color: defaultValue ? colorDefault.grey : colorDefault.blue},
                }}
                icon={icon}
                checkedIcon={checkedIcon}
                disabled={disabled}
            />
        </ListItemAvatar>
    )
}
