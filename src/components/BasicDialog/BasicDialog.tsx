import React, {useEffect, useState, ReactNode} from "react"
import {Application, Button, Modal} from "react-rainbow-components"
import {customModalStyle, rainbowThemeDefault} from "../../common/layout"

type Props = {
    title?: string
    confirmLabel?: string
    children?: ReactNode
    isOpen?: boolean
    rainbowTheme?: object
    handleClose: () => any
    handleConfirm: () => any
    confirmPermission?: string
    handlePermission?: (params: any) => any
}

export default function BasicDialog({
    title = "Test Title",
    children = undefined,
    isOpen = false,
    rainbowTheme = rainbowThemeDefault,
    handleClose,
    handleConfirm,
    confirmPermission,
    handlePermission,
    confirmLabel = "Confirm",
}: Props) {
    const [open, setOpen] = useState(isOpen)

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen])

    function innerHandleClose() {
        //setOpen(!open)
        if (handleClose) {
            handleClose()
        } else {
            setOpen(false)
        }
    }

    function innerHandlerConfirm() {
        //setOpen(!open)
        if (handleConfirm) {
            handleConfirm()
        } else {
            setOpen(false)
        }
    }
    var isPermissionDeny = true
    if (handlePermission) {
        isPermissionDeny = handlePermission(confirmPermission)
    }
    var footer = (
        <div className='rainbow-flex rainbow-justify_end'>
            <Button
                form='redux-form-id'
                className='rainbow-m-right_large'
                label='Cancel'
                variant='neutral'
                onClick={innerHandleClose}
            />
            <Button
                form='redux-form-id'
                label={confirmLabel}
                variant='brand'
                type='submit'
                disabled={isPermissionDeny}
                onClick={innerHandlerConfirm}
            />
        </div>
    )
    return (
        <Application theme={rainbowTheme}>
            <Modal
                id='modal-11'
                title={title}
                isOpen={open}
                onRequestClose={innerHandleClose}
                style={customModalStyle}
                footer={footer}
            >
                {children}
            </Modal>
        </Application>
    )
}
