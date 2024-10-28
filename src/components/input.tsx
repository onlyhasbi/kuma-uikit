import { InputProps, k } from "@kuma-ui/core";
import { forwardRef, Ref, useState } from "react";
import { defaultTheme } from "../../kuma.config";

interface ForwardedInputProps extends InputProps {
  label: React.ReactNode;
  placeholder: string;
  icon: JSX.Element | null;
  iconPosition: "left" | "right";
  helperMessage: string;
  error: string;
  hideHelperMessage: boolean;
  onChange: (e: string) => void;
  length: number;
  value: string;
}

const Input = forwardRef<HTMLInputElement, Partial<ForwardedInputProps>>(
  (
    {
      label,
      icon,
      iconPosition = "left",
      helperMessage,
      error,
      hideHelperMessage = false,
      length,
      placeholder,
      onChange,
      value,
      ...props
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const defaultPaddingHorizontal = ".6rem";
    const [borderColor, setBorderColor] = useState(defaultTheme.colors.border);
    const onFocus = () => setBorderColor(defaultTheme.colors.primary);
    const onBlur = () => setBorderColor(defaultTheme.colors.border);

    const helper =
      (error || helperMessage) && !hideHelperMessage ? (
        <k.p
          fontSize={"fontSizes.sm"}
          mt={"sizes.margin.1"}
          color={error ? "colors.error" : "colors.helperMessage"}
        >
          {error || helperMessage}
        </k.p>
      ) : null;

    return (
      <k.div>
        {label && <label>{label}</label>}
        <k.div
          paddingX={defaultPaddingHorizontal}
          display={"flex"}
          flexDirection={
            icon && iconPosition === "left" ? undefined : "row-reverse"
          }
          gap={".3rem"}
          overflow={"hidden"}
          alignItems={"center"}
          borderRadius={"radii.sm"}
          borderWidth={"sizes.border.thin"}
          borderStyle={"solid"}
          borderColor={error ? "colors.error" : borderColor}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          {icon}
          <k.input
            ref={ref}
            placeholder={placeholder}
            outline={"none"}
            border={"none"}
            height={"sizes.height.md"}
            fontSize={"fontSizes.sm"}
            _placeholder={{
              fontSize: "fontSizes.md",
            }}
            onChange={(e) =>
              onChange?.(
                e.target.value.slice(0, length || e.target.value.length)
              )
            }
            value={value}
            {...props}
          />
        </k.div>
        {helper}
      </k.div>
    );
  }
);

export default Input;
