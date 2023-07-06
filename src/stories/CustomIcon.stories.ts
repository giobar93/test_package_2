import type {Meta, StoryObj} from "@storybook/react"
import CustomIcon from "../components/CustomIcon/CustomIcon"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/CustomIcon",
    component: CustomIcon,
    tags: ["autodocs"],
    argTypes: {
        tooltipText: {control: "text"},
    },
} satisfies Meta<typeof CustomIcon>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {
        tooltipText: "Test Title",
        children: "Children Component",
    },
}
