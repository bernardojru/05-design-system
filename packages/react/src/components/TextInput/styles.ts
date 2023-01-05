import { styled } from "../../styles/.";

export const TextInputContainer = styled("div", {
  backgroundColor: "#121214",
  padding: "0.75rem 1rem",
  borderRadius: "6px",
  boxSizing: "border-box",
  border: "2px solid #121214",

  display: "flex",
  alignItems: "baseline",

  "&:has(input:focus)": {
    borderColor: "#00B37E",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const Prefix = styled("span", {
  fontFamily: "Roboto, sans-serif",
  fontSize: "0.875rem",
  color: "#7C7C8A",
  fontWeight: "400",
});

export const Input = styled("input", {
  fontFamily: "Roboto, sans-serif",
  fontSize: "0.875rem",
  color: "#fff",
  fontWeight: "400",
  background: "transparent",
  border: 0,
  width: "100%",

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "#7C7C8A",
  },
});
