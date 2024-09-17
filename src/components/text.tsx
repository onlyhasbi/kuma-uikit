import {
  HStack,
  HStackProps,
  Text as KumaText,
  TextProps,
} from "@kuma-ui/core";
import Icon from "./icon";
import { IconElement } from "./types";

export type Icon = {
  iconPosition?: "left" | "right";
} & IconElement;

type Props = {
  container?: Omit<HStackProps, "flexDirection">;
} & Icon &
  TextProps;

function Text({
  children,
  icon,
  iconPosition = "left",
  container,
  ...props
}: Props) {
  const isLeft = iconPosition === "left";
  return (
    <HStack
      gap={container?.gap || 7}
      flexDirection={isLeft ? undefined : "row-reverse"}
      {...container}
    >
      <Icon icon={icon} />
      {!children ? null : (
        <KumaText
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          {...props}
        >
          {children}
        </KumaText>
      )}
    </HStack>
  );
}

export default Text;
