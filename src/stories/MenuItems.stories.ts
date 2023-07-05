import type { Meta, StoryObj} from "@storybook/react"
import MenuItem from "../components/Menu/MenuItem"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  argTypes: {
    text: {control: "text"},
  },
} satisfies Meta<typeof MenuItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {
    text : "Test Title",
  },
}

