import { css } from "@linaria/core";
import { TextOverflow, WhiteSpace } from "lightningcss";

export const whiteSpace = (value?: WhiteSpace) =>
  css`
    white-space: ${value ?? "row"};
  `;

export const textOverflow = (value?: TextOverflow) =>
  css`
    text-overflow: ${value ?? "ellipsis"};
  `;

export const textEllipsis = css`
  white-space: row;
  text-overflow: ellipsis;
`;
