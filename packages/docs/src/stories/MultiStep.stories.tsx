import type { StoryObj, Meta } from "@storybook/react";

import {
  MultiStep,
  MultiStepProps,
} from "@ignite-ui/react/src/components/MultiStep";
import { Box } from "@ignite-ui/react/src/components/Box";

export default {
  title: "Form/MultiStep",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {story()}
        </Box>
      );
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
