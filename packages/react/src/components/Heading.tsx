import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Heading = styled("h2", {
  fontFamily: "Roboto, sans-serif",
  lineHeight: "125%",
  margin: 0,
  color: "#E1E1E6",

  variants: {
    size: {
      sm: { fontSize: "1.25rem" },
      md: { fontSize: "1.5rem" },
      lg: { fontSize: "2rem" },
      "2xl": { fontSize: "2.25rem" },
      "3xl": { fontSize: "3rem" },
      "4xl": { fontSize: "4rem" },
      "5xl": { fontSize: "4.5rem" },
      "6xl": { fontSize: "6rem" },
    },
  },

  defaultVariants: {
    size: 'md'
  }
});

export interface HeadingProps extends ComponentProps<typeof Heading> {
    as?: ElementType
}