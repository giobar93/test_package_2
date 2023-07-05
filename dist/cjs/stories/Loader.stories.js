"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Large = exports.Secondary = void 0;
var tslib_1 = require("tslib");
var Loader_1 = tslib_1.__importDefault(require("../components/Loader/Loader"));
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var meta = {
    title: "Example/Loader",
    component: Loader_1.default,
    tags: ["autodocs"],
    argTypes: {
        heigth: { control: "number" },
    },
};
exports.default = meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.Secondary = {};
exports.Large = {};
//# sourceMappingURL=Loader.stories.js.map