import { ComponentProps } from "@stitches/react";
import { styled } from "../styles";

export const TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "baseline",
  "&:has(input:focus)": {
    borderColor: "$main300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  }
})
export const TextInputPrefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular"
})
export const TextInputData = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  background: "transparent",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder ": {
    color: "$gray400"
  }
})

export type TextInputProps = ComponentProps<typeof TextInputData> & {
  prefix?: string
}
export function TextInput(props: TextInputProps) {
  return <TextInputContainer>
    {props.prefix && <TextInputPrefix >{props.prefix}</TextInputPrefix>}
    <TextInputData {...props} />
  </TextInputContainer>
}
TextInputData.displayName = "TextInput"


