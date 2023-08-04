import React, {useEffect} from "react"
import {Application, Input} from "react-rainbow-components"
import "./InputText.css"
import {rainbowThemeDefault} from "../../common/layout"

type Props = {
    title: string
    placeholder: string
    handleChange: (x?: any) => any
    disabled: boolean
    currentValue: string
    required: boolean
    titleStyle?: object
    withLabel: boolean
    inputStyles: object
}

export default function InputText({
    title,
    placeholder,
    handleChange,
    disabled,
    currentValue = "",
    required,
    titleStyle = {},
    withLabel,
    inputStyles = {
        width: 300,
        padding: "0px",
    },
}: Props) {
    useEffect(() => {}, [placeholder, handleChange, currentValue])

    function extractText(e: any) {
        handleChange(e.target.value)
    }

    return (
        <Application theme={rainbowThemeDefault}>
            {!withLabel && (
                <p style={{display: "inline-flex", alignItems: "baseline", margin: 0, ...titleStyle}}>
                    {required && <p style={{color: "red", marginInlineEnd: "5px"}}>* </p>}
                    {title}
                </p>
            )}
            <Input
                valueAlignment='center'
                label={withLabel ? placeholder : ""}
                required={required}
                type='text'
                className='rainbow-p-around_medium'
                onChange={extractText}
                value={currentValue}
                style={inputStyles}
                disabled={disabled}
                placeholder={placeholder}
            />
        </Application>
    )
}
