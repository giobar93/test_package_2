import type { StoryObj } from "@storybook/react";
import Loader from "../components/Loader/Loader";
declare const meta: {
    title: string;
    component: typeof Loader;
    tags: string[];
    argTypes: {
        heigth: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Secondary: Story;
export declare const Large: Story;
