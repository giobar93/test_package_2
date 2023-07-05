import type { Meta, StoryObj} from "@storybook/react"
import Unauthorized from "../components/ErrorPages/Unathorized"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Unauthorized",
  component: Unauthorized,
  tags: ["autodocs"],
  argTypes: {
    
  },
} satisfies Meta<typeof Unauthorized>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {
   
    
  },
}

