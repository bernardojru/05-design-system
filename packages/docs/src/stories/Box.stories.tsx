import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@ignite-ui/react/src/components/Box";
import { Text } from "@ignite-ui/react/src/components/Text";

export default {
  title: "Surfaces/Box",
  component: Box,

  args: {
    children: <Text>Testando o Elemento Box</Text>,
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
