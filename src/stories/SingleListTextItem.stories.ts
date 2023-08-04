import type {Meta, StoryObj} from "@storybook/react"
import SingleListTextItem from "../components/List/SingleListTextItem"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/SingleListTextItem",
    component: SingleListTextItem,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SingleListTextItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {
        keyStyle: {color: "green", fontSize: "12px"},
        valueStyle: {color: "blue", fontSize: "20px"},
    },
}
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
