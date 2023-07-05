import { Alert, AlertTitle } from "@mui/material";
import React from "react";
export var Colors;
(function (Colors) {
    Colors[Colors["error"] = 0] = "error";
    Colors[Colors["warning"] = 1] = "warning";
    Colors[Colors["info"] = 2] = "info";
    Colors[Colors["success"] = 3] = "success";
})(Colors || (Colors = {}));
export default function CustomAlert(_a) {
    var _b = _a.text, text = _b === void 0 ? "Alert message" : _b, _c = _a.color, color = _c === void 0 ? "success" : _c, _d = _a.title, title = _d === void 0 ? "Warning" : _d;
    return (React.createElement(Alert, { sx: { width: "100%" }, severity: color },
        React.createElement(AlertTitle, null,
            React.createElement("strong", null, title)),
        text));
}
//# sourceMappingURL=CustomAlert.js.map