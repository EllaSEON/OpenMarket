import { DefaultTheme } from "styled-components";

const colors: { [key: string]: string } = {
  green: "#21BF48",
  lightGray: "#C4C4C4",
  darkGray: "#767676",
  red: "#EB5757",
  white: "#ffffff",
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
