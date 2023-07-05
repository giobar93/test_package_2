import CustomAlert from "../components/CustomAlert/CustomAlert";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var meta = {
    title: "Example/Alert",
    component: CustomAlert,
    tags: ["autodocs"],
    argTypes: {
        text: { control: "text" },
    },
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export var Primary = {
    args: {
        text: "Button",
    },
};
export var Secondary = {
    args: {
        text: "Button",
    },
};
export var Large = {
    args: {
        text: "large",
    },
};
//# sourceMappingURL=Alert.stories.js.map