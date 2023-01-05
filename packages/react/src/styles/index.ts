import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@ignite-ui/tokens";

import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    height: "space",
    width: "space",
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
});
