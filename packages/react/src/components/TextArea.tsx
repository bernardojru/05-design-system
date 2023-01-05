import { styled } from "../styles";
import { ComponentProps } from "react";

export const TextArea = styled("textarea", {
  backgroundColor: "#121214",
  padding: "0.75rem 1rem",
  borderRadius: "6px",
  boxSizing: "border-box",
  border: "2px solid #121214",

  fontFamily: "Roboto, sans-serif",
  fontSize: "0.875rem",
  color: "#fff",
  fontWeight: "400",
  resize: "vertical",
  minHeight: 80,

  "&:focus": {
    outline: 0,
    borderColor: "#00B37E",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "#7C7C8A",
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'