import {createTheme} from "@material-ui/core/styles";
export const appGlobalCssTheme  = createTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
          },
        },
      },
    },
  });