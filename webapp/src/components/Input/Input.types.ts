import { ChangeEvent, ChangeEventHandler } from "react";

export type InputProps = {
    label?: string;
    type?: "text";
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>
};