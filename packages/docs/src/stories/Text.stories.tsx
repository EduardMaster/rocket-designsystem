import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "@learn-rocket-ui/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Surfaces/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    children: "Texto padrão"
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong"
  }
}

