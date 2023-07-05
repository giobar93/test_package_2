import type { Meta, StoryObj} from "@storybook/react"
import DataTable from "../components/RoleDataTable/DataTable"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {
    data : {control:"object"},
    headers : {control:"object"},
    
  },
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Show: Story = {
  args: {
    data:[
      {
          "rows": "encoder.create",
          "columns": [
              {
                  "Default_Role": true,
                  "isActive": false
              },
              {
                  "Admin": true,
                  "isActive": false
              },
              {
                  "Event_Admin": false,
                  "isActive": false
              },
              {
                  "Event_Reader": false,
                  "isActive": true
              },
              {
                  "Encoder_Admin": true,
                  "isActive": false
              },
              {
                  "Encoder_Reader": false,
                  "isActive": false
              }
          ]
      },
      {
          "rows": "encoder.delete",
          "columns": [
              {
                  "Default_Role": true,
                  "isActive": false
              },
              {
                  "Admin": true,
                  "isActive": false
              },
              {
                  "Event_Admin": false,
                  "isActive": false
              },
              {
                  "Event_Reader": false,
                  "isActive": true
              },
              {
                  "Encoder_Admin": true,
                  "isActive": false
              },
              {
                  "Encoder_Reader": true,
                  "isActive": false
              }
          ]
      },
      {
          "rows": "encoder.update",
          "columns": [
              {
                  "Default_Role": true,
                  "isActive": false
              },
              {
                  "Admin": true,
                  "isActive": false
              },
              {
                  "Event_Admin": false,
                  "isActive": false
              },
              {
                  "Event_Reader": false,
                  "isActive": true
              },
              {
                  "Encoder_Admin": true,
                  "isActive": false
              },
              {
                  "Encoder_Reader": false,
                  "isActive": false
              }
          ]
      },
      {
          "rows": "encoder.read",
          "columns": [
              {
                  "Default_Role": true,
                  "isActive": false
              },
              {
                  "Admin": true,
                  "isActive": false
              },
              {
                  "Event_Admin": false,
                  "isActive": false
              },
              {
                  "Event_Reader": true,
                  "isActive": true
              },
              {
                  "Encoder_Admin": true,
                  "isActive": false
              },
              {
                  "Encoder_Reader": true,
                  "isActive": false
              }
          ]
      }
  ]
  },
}

