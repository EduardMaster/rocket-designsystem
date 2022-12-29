import { styled } from '@stitches/react';
import React from 'react';
const Button = styled("button", {
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
export function App() {

  return <Button>Aplicativo criado</Button>
}