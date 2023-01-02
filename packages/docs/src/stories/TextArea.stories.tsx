import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import { TextAreaProps, TextArea, Box, Text } from "@learn-rocket-ui/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Text Area',
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [(Story) => {
    return (<Box as="label" css={{
      display: "flex",
      flexDirection: "column",
      gap: "$2"
    }}>
      <Text size="sm">Observations</Text>
      {Story()}
    </Box>)
  }],
  args: {

  }
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Type your biography"
  }
}
export const Disabled: StoryObj<TextAreaProps> = {

  args: {
    disabled: true
  }
}
