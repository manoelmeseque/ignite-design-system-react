import { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@manoel-meseque-tests-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "http://github.com/manoelmeseque.png",
    alt: "Manoel Meseque",
  },

  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
