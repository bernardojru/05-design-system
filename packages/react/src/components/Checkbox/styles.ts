import { styled, keyframes } from "../../styles";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "#121214",
  borderRadius: "4px",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #121214",

  '&[data-state="checked"]': {
    backgroundColor: "#00B37E",
  },

  "&:focus": {
    border: "2px solid #00B37E",
  },
});

const slideIn = keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const slideOut = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(-100%)",
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "#fff",
  width: "$4",
  height: "$4",

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  },

});
