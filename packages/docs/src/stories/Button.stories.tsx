import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "@learn-rocket-ui/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {

    children: "Enviar"
  }
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args:
  {
    variant: "secondary"
  }
}
export const Tertiary: StoryObj<ButtonProps> = {
  args:
  {
    variant: "tertiary"
  }
}
export const Disabled: StoryObj<ButtonProps> = {
  args:
  {
    disabled: true
  }
}


