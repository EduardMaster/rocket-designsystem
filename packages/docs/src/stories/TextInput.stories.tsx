import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import { TextInputProps, TextInput, Box, Text } from "@learn-rocket-ui/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Text Input',
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [(Story) => {
    return (<Box as="label" css={{
      display: "flex",
      flexDirection: "column",
      gap: 2
    }}>
      <Text size="sm">Github user</Text>
      {Story()}
    </Box>)
  }],
  args: {

  }
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your github name"
  }
}
export const Disabled: StoryObj<TextInputProps> = {

  args: {
    disabled: true
  }
}
export const WithPrefix: StoryObj<TextInputProps> = {

  args: {
    prefix: "https://github.com/"
  }
}
