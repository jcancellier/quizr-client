import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    fontFamily: "'Varela Round', sans-serif"
  }
})

theme = responsiveFontSizes(theme);

export default theme;
