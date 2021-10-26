import { getQueriesForElement } from "@testing-library/dom";
import { Colors } from "./types";

export const baseColors = {
  failure: "#ed2828",
  primary: "#ff9400",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#81501d",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#040000",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
  grey: "#F6F6F6",
  green: "green",
  yellow: "yellow",
  red: "red",
  blue: "blue",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#81501d",
  background: "#010101",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#0a0a0a",
  backgroundAlt2: "#010101",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#202020",
  dropdownDeep: "#0a0a0a",
  invertedContrast: "#191326",
  input: "#372f4701",
  inputSecondary: "#262130",
  primaryDark: "#81501d",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#bdbdbd",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #22222200 0%, #3D2A5400 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "transparent",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    linear: "linear-gradient(90deg, rgba(0,0,0,.4) 0%, rgba(255,25,255,.15) 40%, rgba(25,255,255,.15) 60%, rgba(0,0,0,0.4) 100%)"
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#81501d",
  background: "#010101",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#0a0a0a",
  backgroundAlt2: "#010101",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#202020",
  dropdownDeep: "#0a0a0a",
  invertedContrast: "#191326",
  input: "#372f4701",
  inputSecondary: "#262130",
  primaryDark: "#81501d",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#bdbdbd",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #22222200 0%, #3D2A5400 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "transparent",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    linear: "linear-gradient(90deg, rgba(0,0,0,.4) 0%, rgba(255,25,255,.15) 40%, rgba(25,255,255,.15) 60%, rgba(0,0,0,0.4) 100%)"
  },
};
