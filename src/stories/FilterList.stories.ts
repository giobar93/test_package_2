import type { Meta, StoryObj} from "@storybook/react"
import DataTable from "../components/RoleDataTable/DataTable"
import { FilterList } from "../components/Filter/FilterList"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/FilterList",
  component: FilterList,
  tags: ["autodocs"],
  argTypes: {
    title : {control:"object"},
 
    
  },
} satisfies Meta<typeof FilterList>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {
    title : "test",
    filters:[],
    options:[
        {
          title: 'Sports',
          field: 'sport',
          values: ['Athletics', 'Badminton', 'Baseball', 'Basketball', 'Football', 'Golf'],
        },
        {
          title: 'Competitions',
          field: 'competition',
          values: ['Ryder Cup', 'Premier League'],
        },
        {
          title: 'Status',
          field: 'status',
          values: ['Approved', 'Pending', 'None'],
        },
      ]
  },
}

