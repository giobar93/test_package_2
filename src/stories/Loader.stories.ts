import type {Meta, StoryObj} from "@storybook/react"
import Loader from "../components/Loader/Loader"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    heigth: {control: "number"},
  },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Secondary: Story = {}

export const Large: Story = {}
