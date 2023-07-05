import type {Meta, StoryObj} from "@storybook/react"
import ToolbarMenu from "../components/ToolbarMenu/ToolbarMenu"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/ToolbarMenu",
  component: ToolbarMenu,
  tags: ["autodocs"],
  argTypes: {
    children: {control: "object"},
  },
} satisfies Meta<typeof ToolbarMenu>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {
    children: "",
  },
}
