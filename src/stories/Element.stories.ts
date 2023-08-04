import type {Meta, StoryObj} from "@storybook/react"
import Element from "../components/Element/Element"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/Element",
    component: Element,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Element>

export default meta
type Story = StoryObj<typeof meta>
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {
        children: "Childrens",
    },
}
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
