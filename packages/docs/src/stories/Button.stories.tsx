import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "@learn-rocket-ui/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button do React',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    children: "Enviar"
  }
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {}
export const Small: StoryObj<ButtonProps> = {
  args:
  {
    size: "small"
  }
}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "big"

  }
}
export const Secondary: StoryObj<ButtonProps> = {}
export const Large: StoryObj<ButtonProps> = {}


