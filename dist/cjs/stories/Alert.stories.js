"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = void 0;
var tslib_1 = require("tslib");
var CustomAlert_1 = tslib_1.__importDefault(require("../components/CustomAlert/CustomAlert"));
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var meta = {
    title: "Components/Alert",
    component: CustomAlert_1.default,
    tags: ["autodocs"],
    argTypes: {
        text: { control: "text" },
    },
};
exports.default = meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.Show = {
    args: {
        text: "Custom Text",
        title: "Custom Title"
    },
};
//# sourceMappingURL=Alert.stories.js.map