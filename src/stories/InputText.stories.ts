import type {Meta, StoryObj} from "@storybook/react"
import InputText from "../components/InputText"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/InputText",
  component: InputText,
  tags: ["autodocs"],
  argTypes: {
    text: {control: "color"},
  },
} satisfies Meta<typeof InputText>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Button",
  },
}

export const Secondary: Story = {
  args: {
    text: "Button",
  },
}

export const Large: Story = {
  args: {
    text: "large",
  },
}
