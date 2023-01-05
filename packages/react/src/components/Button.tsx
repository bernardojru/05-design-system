import { ComponentProps, ElementType } from "react";
import { styled } from "../styles/.";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "6px",
  fontSize: "0.875rem",
  fontWeight: "500",
  fontFamily: "Roboto, sans-serif",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  padding: "0 1rem",

  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        color: "#fff",
        background: "#00875F",

        "&:not(:disabled):hover": {
          background: "#00B37E",
        },

        "&:disabled": {
          backgroundColor: "#A9A9B2",
        },
      },

      secondary: {
        color: "#00B37E",
        border: "2px solid #00875F",

        "&:not(:disabled):hover": {
          background: "#00875F",
          color: "#fff",
        },

        "&:disabled": {
          color: "#A9A9B2",
          backgroundColor: "#A9A9B2",
        },
      },

      tertiary: {
        color: "#E1E1E6",

        "&:not(:disabled):hover": {
          color: "#fff",
        },

        "&:disabled": {
          color: "#323238",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}
