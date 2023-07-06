import type {Meta, StoryObj} from "@storybook/react"
import BasicDialog from "../components/BasicDialog/BasicDialog"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/BasicDialog",
    component: BasicDialog,
    tags: ["autodocs"],
    argTypes: {
        title: {control: "text"},
    },
} satisfies Meta<typeof BasicDialog>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
    args: {
        title: "Test Title",
        children: "Children Component",
        isOpen: false,
        confirmPermission: "null",
        handlePermission: () => console.log("test"),
        confirmLabel: "Confirm",
    },
}
