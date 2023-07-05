import type { StoryObj } from "@storybook/react";
import CustomAlert from "../components/CustomAlert/CustomAlert";
declare const meta: {
    title: string;
    component: typeof CustomAlert;
    tags: string[];
    argTypes: {
        text: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
