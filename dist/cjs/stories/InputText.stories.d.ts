import type { StoryObj } from "@storybook/react";
import InputText from "../components/InputText";
declare const meta: {
    title: string;
    component: typeof InputText;
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
