import type {Meta, StoryObj} from "@storybook/react"
import CheckBoxItem from "../components/CheckboxItem/CheckboxItem"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/CheckboxItem",
  component: CheckBoxItem,
  tags: ["autodocs"],
  argTypes: {
    data: {control: "text"},
  },
} satisfies Meta<typeof CheckBoxItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {
    checkBoxId: "string",
    handleChange: () => console.log("s"),
    icon: undefined,
    checkedIcon: undefined,
    data: {t: "t"},
    isChecked: true,
    disabled: false,
    defaultValue: false,
  },
}
