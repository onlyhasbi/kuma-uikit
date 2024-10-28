import { ClassName } from "@linaria/core/cx";
import { PropsWithChildren } from "react";

export type IconPosition = {
  iconPosition?: "left" | "right";
};

export type IconElement = Partial<{
  icon: JSX.Element;
  color: string;
  hover: string;
}>;

export type Icon = IconPosition & IconElement;

export type TextProps = PropsWithChildren<
  Icon & {
    containerStyle: ClassName;
    textStyle: ClassName;
  }
>;

export type AccordionProps = {
  title?: React.ReactNode;
  isCollapsible?: boolean;
  items?: Array<React.ReactNode>;
} & Icon;
