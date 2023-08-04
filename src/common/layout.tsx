export const colorDefault = {
    blue: "#133c70",
    grey: "#c9c9d9",
    white_4: "#E4F0FF",
    white_5: "#e4f0ff00",
    element: "#E4F0FF",
}
export const rainbowThemeDefault = {
    rainbow: {
        palette: {
            brand: colorDefault.blue,
            mainBackground: "#fffff",
            success: "#44d7b6",
            error: "#f14336",
            warning: "#f7b500",
        },
    },
}

export const customIconTheme = {
    color: colorDefault.blue,
    border: "1px solid " + colorDefault.blue,
    borderRadius: "10px",
}

export const elementStyle = {
    display: "flex",
    backgroundColor: colorDefault.element,
    marginBottom: "5px",
    fontWeight: "bold",
}

export const customModalStyle = {
    border: "1px solid " + colorDefault.blue,
    width: "max-content",
    maxWidth: "90%",
    minWidth: "500px",
}

export const innerAppBarStyle = {
    zIndex: -2,
    flexGrow: 1,
    color: colorDefault.blue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    left: 0,
}

export const toolbarStyle = {
    background: colorDefault.white_5,
    width: "100%",
    height: "10vh",
    borderBottom: "2px solid " + colorDefault.blue,
}
export const drawerStyle = {
    height: "90vh",
    position: "relative",
    backgroundColor: colorDefault.white_4,
    width: "0",
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
        position: "relative",
        width: "320px",
        boxSizing: "border-box",
        backgroundColor: colorDefault.white_5,
        borderRight: "2px solid " + colorDefault.blue,
    },
}
