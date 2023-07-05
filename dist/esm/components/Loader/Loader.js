import React from "react";
import { ThreeDots } from "react-loader-spinner";
export default function Loader(_a) {
    var _b = _a.heigth, heigth = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 9 : _d, _e = _a.color, color = _e === void 0 ? "#133c70" : _e, _f = _a.visible, visible = _f === void 0 ? true : _f;
    return (React.createElement("div", { style: { display: "flex", justifyContent: "center", alignItems: "center" } },
        React.createElement(ThreeDots, { height: heigth, width: width, radius: radius, color: color, ariaLabel: 'three-dots-loading', visible: visible })));
}
//# sourceMappingURL=Loader.js.map