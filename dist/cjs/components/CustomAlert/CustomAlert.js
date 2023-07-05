"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = void 0;
var tslib_1 = require("tslib");
var material_1 = require("@mui/material");
var react_1 = tslib_1.__importDefault(require("react"));
var Colors;
(function (Colors) {
    Colors[Colors["error"] = 0] = "error";
    Colors[Colors["warning"] = 1] = "warning";
    Colors[Colors["info"] = 2] = "info";
    Colors[Colors["success"] = 3] = "success";
})(Colors || (exports.Colors = Colors = {}));
function CustomAlert(_a) {
    var _b = _a.text, text = _b === void 0 ? "Alert message" : _b, _c = _a.color, color = _c === void 0 ? "success" : _c, _d = _a.title, title = _d === void 0 ? "Warning" : _d;
    return (react_1.default.createElement(material_1.Alert, { sx: { width: "100%" }, severity: color },
        react_1.default.createElement(material_1.AlertTitle, null,
            react_1.default.createElement("strong", null, title)),
        text));
}
exports.default = CustomAlert;
//# sourceMappingURL=CustomAlert.js.map