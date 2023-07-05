import InputText from "../components/InputText";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var meta = {
    title: "Components/InputText",
    component: InputText,
    tags: ["autodocs"],
    argTypes: {
        text: { control: "color" },
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
//# sourceMappingURL=InputText.stories.js.map