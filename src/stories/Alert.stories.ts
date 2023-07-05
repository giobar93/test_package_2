import type {Meta, StoryObj} from "@storybook/react"
import CustomAlert from "../components/CustomAlert/CustomAlert"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Alert",
  component: CustomAlert,
  tags: ["autodocs"],
  argTypes: {
    text: {control: "text"},
  },
} satisfies Meta<typeof CustomAlert>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {
    text: "Custom Text",
    title: "Custom Title",
  },
}
