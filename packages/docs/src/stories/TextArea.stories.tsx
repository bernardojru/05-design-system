import type { StoryObj, Meta } from "@storybook/react";

import {
  TextArea,
  TextAreaProps,
} from "@ignite-ui/react/src/components/TextArea";
import { Box } from "@ignite-ui/react/src/components/Box";
import { Text } from "@ignite-ui/react/src/components/Text";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <Text size="sm">Email address</Text>
          {story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observations...",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
