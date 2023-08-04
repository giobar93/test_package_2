import type {Meta, StoryObj} from "@storybook/react"
import Element from "../components/Element/Element"
import ElementExample from "../components/Examples/ElementExample"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Example/Element",
    component: ElementExample,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ElementExample>

export default meta
type Story = StoryObj<typeof meta>
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {
        children: "Childrens",
    },
}
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
