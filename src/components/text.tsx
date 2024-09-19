import { HStack, Text as KumaText } from "@kuma-ui/core";
import Icon from "./icon";
import { TextProps } from "./types";

function Text({
  children,
  icon,
  iconPosition = "left",
  container,
  ...props
}: TextProps) {
  const isLeft = iconPosition === "left";

  if (!children) return null;

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
          title={typeof children == "string" ? children : undefined}
          {...props}
        >
          {children}
        </KumaText>
      )}
    </HStack>
  );
}

export default Text;
