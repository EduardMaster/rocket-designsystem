import { ComponentProps } from "react"
import { styled } from "../styles";


export const StyledButton = styled("button", {
  fontFamily: '$default',
  backgroundColor: "$main300",
  borderRadius: "$sm",
  border: 0,
  fontWeight: "bold",
  color: "White",
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },
      big: {
        fontSize: 14,
        padding: "$3 $6"
      }
    },
  },
  defaultVariants: {
    size: "small"
  }
})
export type ButtonProps = ComponentProps<typeof StyledButton> & {
  label?: string;
}
export function Button(props: ButtonProps) {
  return <StyledButton>{props.label ?? props.children}</StyledButton>
}
