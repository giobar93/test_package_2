import type {Meta, StoryObj} from "@storybook/react"
import MenuMultiChoice from "../components/MenuMultiChoice/MenuMultiChoice"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/MenuMultiChoice",
    component: MenuMultiChoice,
    tags: ["autodocs"],
    argTypes: {
        required: {control: "boolean"},
        withLabel: {control: "boolean"},
        title: {control: "text"},
        currentValue: {control: "object"},
        handleOnChange: {control: "object"},
        style: {control: "object"},
        options: {control: "object"},
    },
} satisfies Meta<typeof MenuMultiChoice>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {
        required: true,
        withLabel: true,
        title: "Custom Title",
        currentValue: [{name: "name2", label: "label2", value: "value2"}],
        handleOnChange: () => console.log("change"),
        style: {},
        options: [
            {name: "name1", label: "label1", value: "value1"},
            {name: "name2", label: "label2", value: "value2"},
            {name: "name3", label: "label3", value: "value3"},
        ],
    },
}
