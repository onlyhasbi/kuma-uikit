import { BoxProps } from "@kuma-ui/core";

export type ChildrenProps = {
  collapsible: boolean;
  children: React.ReactNode | ((collapsible: boolean) => JSX.Element);
} & Omit<BoxProps, "children">;
