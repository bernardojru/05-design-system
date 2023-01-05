import { styled } from "../../styles";
import { Text } from "../Text";

export const MultiStepContainer = styled("div", {});

export const Label = styled(Text, {
  color: "#A9A9B2",

  defaultVariants: {
    size: "0.75rem",
  },
});

export const Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: "0.5rem",
  marginTop: "0.25rem",
});

export const Step = styled("div", {
  height: "$1",
  borderRadius: "1px",
  backgroundColor: "#323238",

  variants: {
    active: {
      true: {
        backgroundColor: "#E1E1E6",
      },
    },
  },
});
