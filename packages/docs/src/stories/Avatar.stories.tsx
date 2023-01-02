import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from "@learn-rocket-ui/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    src: "https://github.com/EduardMaster.png",
    alt: "Eduard no Git"

  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: { src: undefined }
}


