import type {Meta, StoryObj} from "@storybook/react"
import SingleListAvatarItem from "../components/List/SingleListAvatarItem"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/SingleListAvatarItem",
    component: SingleListAvatarItem,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SingleListAvatarItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {},
}
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
