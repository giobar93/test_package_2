"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_loader_spinner_1 = require("react-loader-spinner");
function Loader(_a) {
    var _b = _a.heigth, heigth = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 9 : _d, _e = _a.color, color = _e === void 0 ? "#133c70" : _e, _f = _a.visible, visible = _f === void 0 ? true : _f;
    return (react_1.default.createElement("div", { style: { display: "flex", justifyContent: "center", alignItems: "center" } },
        react_1.default.createElement(react_loader_spinner_1.ThreeDots, { height: heigth, width: width, radius: radius, color: color, ariaLabel: 'three-dots-loading', visible: visible })));
}
exports.default = Loader;
//# sourceMappingURL=Loader.js.map