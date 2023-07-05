import React from "react";
export declare enum Colors {
    error = 0,
    warning = 1,
    info = 2,
    success = 3
}
export type AlertColor = "success" | "info" | "warning" | "error";
type Props = {
    title?: string;
    text?: string;
    color?: "success" | "info" | "warning" | "error";
};
export default function CustomAlert({ text, color, title }: Props): React.JSX.Element;
export {};
