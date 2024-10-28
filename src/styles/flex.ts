import { css } from "@linaria/core";
import { FlexDirection } from "lightningcss";
import { Property } from "csstype";

export const flex = css`
  display: flex;
`;

export const flexDirection = (direction?: FlexDirection) =>
  css`
    flex-direction: ${direction ?? "row"};
  `;

export const gap = (gap?: string) =>
  css`
    flex-direction: ${gap ?? "1px"};
  `;

export const vStack = css`
  flex-direction: column;
  ${flex}
`;

export const justify = (value: Property.JustifyContent) =>
  !value
    ? ""
    : css`
        justify-content: ${value};
      `;
