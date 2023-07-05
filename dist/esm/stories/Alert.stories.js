import CustomAlert from "../components/CustomAlert/CustomAlert";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var meta = {
    title: "Components/Alert",
    component: CustomAlert,
    tags: ["autodocs"],
    argTypes: {
        text: { control: "text" },
    },
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export var Show = {
    args: {
        text: "Custom Text",
        title: "Custom Title"
    },
};
//# sourceMappingURL=Alert.stories.js.map