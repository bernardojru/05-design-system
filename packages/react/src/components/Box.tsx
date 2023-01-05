import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Box = styled("div", {
    padding: '1rem',
    borderRadius: '1rem',
    backgroundColor: '#202024',
    border: '1px solid #323238'
});

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}