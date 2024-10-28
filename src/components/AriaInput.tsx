import { css } from "@linaria/core";
import { forwardRef } from "react";
import {
  Input,
  InputProps,
  Label,
  Text,
  TextField,
} from "react-aria-components";

type Props = Partial<{
  label: string;
  helperMessage: string;
  borderColor: string;
  errorBorderColor: string;
}> &
  InputProps;

const AriaInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      helperMessage,
      borderColor = "#ddd",
      errorBorderColor = "red",
      ...props
    },
    ref
  ) => {
    return (
      <TextField
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <Label
          className={css`
            font-size: 0.75rem;
            color: #888;
          `}
        >
          {label}
        </Label>
        <Input
          ref={ref}
          className={css`
            height: 30px;
            padding: 0 12px;
            border-radius: 5px;
            border: 1px solid ${borderColor};
            outline: none;
            &[data-focused="true"] {
              border-color: ${errorBorderColor};
            }
          `}
          maxLength={10}
          {...props}
        />
        <Text
          slot="description"
          className={css`
            font-size: 0.75rem;
            margin-top: 0.15rem;
            color: red;
          `}
        >
          {helperMessage}
        </Text>
      </TextField>
    );
  }
);

export default AriaInput;
