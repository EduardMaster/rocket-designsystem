import { createStitches, defaultThemeMap } from "@stitches/react";
import { colors, fonts, fontSizes, fontWeights, lineHeights, radious, space } from "@learn-rocket-ui/tokens"

export const { styled, css,
  globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space'
    },
    theme: {
      colors: colors,
      fontSizes: fontSizes,
      fontWeights: fontWeights,
      radii: radious,
      space: space,
      lineHeights: lineHeights,
      fonts: fonts
    }
  })