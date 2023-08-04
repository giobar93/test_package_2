import type {Meta, StoryObj} from "@storybook/react"
import RoleTableHead from "../components/RoleDataTable/RoleTableHead"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/RoleTableHead",
    component: RoleTableHead,
    tags: ["autodocs"],
    argTypes: {
        headers: {control: "object"},
    },
} satisfies Meta<typeof RoleTableHead>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {
        headers: ["Default_Role", "Admin", "Event_Admin", "Event_Reader", "Encoder_Admin", "Encoder_Reader"],
    },
}
