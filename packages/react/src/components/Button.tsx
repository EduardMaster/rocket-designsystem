import { ComponentProps } from "react"
import { styled } from "../styles";


export const StyledButton = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "bold",
  fontFamily: '$default',
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  cursor: "pointer",
  svg: {
    width: "$6",
    height: "$6"
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$main500",
        '&:not(:disabled):hover': {
          background: "$main300"
        },
        '&:disabled': {
          background: "$gray200"
        }
      },
      secondary: {
        color: "$main300",
        border: "2px solid $main500",
        '&:not(:disabled):hover': {
          background: "$main500",
          color: "$white"
        },
        '&:disabled': {
          color: "$gray200",
          borderColor: "$gray200"
        }

      },
      tertiary: {
        color: "$gray100",
        '&:not(:disabled):hover': {
          color: "$white"
        },
        '&:disabled': {
          color: "$gray600",
        }
      }
    },
    size: {
      md: {
        height: 46,
        padding: "$2 $4",
      },
      big: {
        height: 80,
        padding: "$3 $6"
      }
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary"
  }
})
export type ButtonProps = ComponentProps<typeof StyledButton> & {
  label?: string;
}
export function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.label ?? props.children}</StyledButton>
}
