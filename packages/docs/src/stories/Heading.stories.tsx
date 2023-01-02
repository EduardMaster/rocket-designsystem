import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "@learn-rocket-ui/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    children: "Titulo padrão"
  }
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Titulo Forte",
    as: "strong"
  },
  parameters: {
    docs: {
      description: {
        story: "Por padrão o heading sempre será h2"
      }
    }
  }
}

