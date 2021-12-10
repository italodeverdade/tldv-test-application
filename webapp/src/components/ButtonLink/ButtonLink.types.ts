import { LinkProps } from "react-router-dom";

export type ButtonLinkProps = {
    label: string;
    component?: any;
} & LinkProps;