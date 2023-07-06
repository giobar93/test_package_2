import type {Meta, StoryObj} from "@storybook/react"
import RoleDataTableExample from "../components/Examples/RoleDataTableExample"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Example/RoleDataTableExample",
    component: RoleDataTableExample,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof RoleDataTableExample>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {},
}
