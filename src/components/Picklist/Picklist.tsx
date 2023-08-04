import React from "react"
import {Option, Picklist} from "react-rainbow-components"
import {OptionsEl} from "../Types/optionsEl"

type Props = {
    label: string
    placeholder: string
    handleOnChange: (x?: any) => any
    currentValue: OptionsEl
    customStyle?: object
    optionList: OptionsEl[]
    iconFunction?: (x?: any) => any
}
export default function PickList({
    label,
    placeholder,
    handleOnChange,
    currentValue,
    customStyle,
    optionList,
    iconFunction,
}: Props) {
    return (
        <Picklist
            label={label}
            placeholder={placeholder}
            required
            onChange={(value) => handleOnChange(value)}
            value={currentValue}
            style={customStyle}
            className='rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto'
        >
            {optionList.map((el) => {
                return (
                    <Option
                        key={el.value}
                        name={el.value}
                        label={el.value}
                        icon={iconFunction ? iconFunction(el.value) : ""}
                    />
                )
            })}
        </Picklist>
    )
}
