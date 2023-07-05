import type { Meta, StoryObj} from "@storybook/react"
import InnerAppBar from "../components/InnerAppBar/InnerAppBar"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/InnerAppBar",
  component: InnerAppBar,
  tags: ["autodocs"],
  argTypes: {
    title: {control: "text"},
  },
} satisfies Meta<typeof InnerAppBar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {
    title : "Test Title"
  },
}

