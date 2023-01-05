import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@ignite-ui/react/src/components/Avatar/.";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/bernardojru.png",
    alt: 'Bernardo José'
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
};