import type {Meta, StoryObj} from "@storybook/react"
import ToolbarMenuExample from "../components/Examples/ToolbarMenuExample"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/ToolbarMenuExample",
  component: ToolbarMenuExample,
  tags: ["autodocs"],
  argTypes: {
    children: {control: "object"},
  },
} satisfies Meta<typeof ToolbarMenuExample>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {
    children: "",
  },
}
