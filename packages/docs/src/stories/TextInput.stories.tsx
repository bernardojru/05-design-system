import type { StoryObj, Meta } from "@storybook/react";

import {
  TextInput,
  TextInputProps,
} from "@ignite-ui/react/src/components/TextInput";
import { Box } from "@ignite-ui/react/src/components/Box";
import { Text } from "@ignite-ui/react/src/components/Text";

export default {
  title: "Form/TextInput",
  component: TextInput,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <Text size="sm">Observations</Text>
          {story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
  },
};
