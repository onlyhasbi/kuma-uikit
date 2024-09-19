import { HStackProps, TextProps as TextPropsKuma } from "@kuma-ui/core";

export type IconPosition = {
  iconPosition?: "left" | "right";
};

export type IconElement = {
  icon?: JSX.Element;
};

export type Icon = IconPosition & IconElement;

export type ContainerStyle = {
  container?: Omit<HStackProps, "flexDirection">;
};

export type TextProps = ContainerStyle & Icon & TextPropsKuma;

export type AccordionProps = {
  title?: React.ReactNode;
  isCollapsible?: boolean;
  items?: Array<React.ReactNode>;
} & ContainerStyle &
  Icon;
