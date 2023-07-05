import type { Meta, StoryObj} from "@storybook/react"
import DialogExample from "../components/Examples/DialogExample"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/DialogExample",
  component: DialogExample,
  tags: ["autodocs"],
  argTypes: {
    text: {control: "text"},
  },
} satisfies Meta<typeof DialogExample>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {
    text : "Test Dialog"
  },
}

