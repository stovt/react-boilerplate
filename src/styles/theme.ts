import { createMuiTheme, Theme } from '@material-ui/core';
import * as colors from './colors';
import * as fonts from './fonts';

const PALETTE_TYPE_LIGHT = 'light';
const PALETTE_TYPE_DARK = 'dark';

interface GetThemeOptions {
  darkMode?: boolean;
}
export const getTheme = (options: GetThemeOptions = {}): Theme =>
  createMuiTheme({
    /* 'factor' is a number and result is string */
    spacing: (factor: number) => `${(8 / fonts.HTML_FONT_SIZE) * factor}rem`,
    palette: {
      type: options.darkMode ? PALETTE_TYPE_DARK : PALETTE_TYPE_LIGHT,
      background: {
        default: colors.backgrounds.bichonFrise
      }
    },
    typography: {
      fontFamily: fonts.MAIN_FONT_FAMILY,
      htmlFontSize: fonts.HTML_FONT_SIZE
    }
  });

const theme = getTheme();

export default theme;
