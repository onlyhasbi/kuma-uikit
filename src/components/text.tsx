import { cx } from "@linaria/core";
import Icon from "./icon";
import { TextProps } from "./types";
import { flex, flexDirection, gap, textEllipsis } from "../styles";

function Text({
  children,
  icon,
  iconPosition = "left",
  containerStyle,
  textStyle,
}: TextProps) {
  const isLeft = iconPosition === "left";

  if (!children) return null;

  return (
    <div
      className={cx(
        flex,
        gap("7px"),
        flexDirection(isLeft ? "row" : "row-reverse"),
        containerStyle
      )}
    >
      <Icon icon={icon} />
      {!children ? null : (
        <p
          className={cx(textEllipsis, textStyle)}
          title={typeof children == "string" ? children : undefined}
        >
          {children}
        </p>
      )}
    </div>
  );
}

export default Text;
