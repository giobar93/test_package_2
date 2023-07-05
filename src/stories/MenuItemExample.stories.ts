import type {Meta, StoryObj} from "@storybook/react"
import MenuItemExample from "../components/Examples/MenuItemsExample"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/MenuItemExample",
  component: MenuItemExample,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MenuItemExample>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {},
}
