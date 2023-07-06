import type {Meta, StoryObj} from "@storybook/react"
import HorizontalCentered from "../components/HorizontalCentered/HorizontalCentered"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/HorizontalCentered",
    component: HorizontalCentered,
    tags: ["autodocs"],
    argTypes: {
        spacing: {control: "number"},
        children: {control: "object"},
    },
} satisfies Meta<typeof HorizontalCentered>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {
        spacing: 2,
    },
}
