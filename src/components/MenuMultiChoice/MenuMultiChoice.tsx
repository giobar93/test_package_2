import React from "react"
import VerticalCentered from "../VerticalCentered/VerticalCentered"
import {MultiSelect, Option} from "react-rainbow-components"
import {OptionsEl} from "../Types/optionsEl"

type Props = {
    withLabel: boolean
    required: boolean
    title: string
    style: object
    currentValue: OptionsEl[]
    handleOnChange: (x?: any) => any
    disabled: boolean
    options: OptionsEl[]
}

export default function MenuMultiChoice({
    withLabel,
    required,
    title,
    style,
    currentValue,
    handleOnChange,
    disabled,
    options,
}: Props) {
    return (
        <>
            <div>
                <VerticalCentered>
                    {!withLabel && (
                        <p style={{display: "inline-flex"}}>
                            {required && <p style={{color: "red", marginInlineEnd: "5px"}}>* </p>}
                            {title}
                        </p>
                    )}
                    <MultiSelect
                        placeholder={title}
                        style={{width: "100%", ...style}}
                        className='rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto'
                        value={currentValue}
                        onChange={handleOnChange}
                        enableSearch
                        showCheckbox
                        variant='chip'
                        disabled={disabled}
                    >
                        {options.map((el, index) => (
                            <Option key={index} name={el.value} label={el.value} />
                        ))}
                    </MultiSelect>
                </VerticalCentered>
            </div>
        </>
    )
}
