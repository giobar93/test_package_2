import type {Meta, StoryObj} from "@storybook/react"
import PickList from "../components/Picklist/Picklist"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/PickList",
    component: PickList,
    tags: ["autodocs"],
    argTypes: {
        label: {control: "text"},
        placeholder: {control: "text"},
        currentValue: {control: "object"},
        handleOnChange: {control: "object"},
        customStyle: {control: "object"},
        optionList: {control: "object"},
        iconFunction: {control: "object"},
    },
} satisfies Meta<typeof PickList>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {
        label: "Custom Label",
        placeholder: "Custom placeholder",
        currentValue: {name: "name2", label: "label2", value: "value2"},
        handleOnChange: () => console.log("change"),
        customStyle: {},
        optionList: [
            {name: "name1", label: "label1", value: "value1"},
            {name: "name2", label: "label2", value: "value2"},
            {name: "name3", label: "label3", value: "value3"},
        ],
        iconFunction: (t) => console.log(t),
    },
}
