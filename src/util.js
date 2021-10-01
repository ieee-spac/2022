import {createTheme} from "@mui/material/styles";
import {isMobile} from "react-device-detect";
import {Button, styled, Typography} from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    /*
    * h1: Large, bold
    * h2: Large, thin
    * h3: Medium, bold
    * h4: Medium, standard
    * h5: Smaller, standard
    * h6: Smallest, bold
    */
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 300
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 'bold'
    },
    h4: {
      fontSize: '2.5rem',
      fontWeight: 'normal'
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 'normal'
    },
    h6: {
      fontSize: '1.3rem',
      fontWeight: 'bold'
    }
  },
  palette: {
    primary: {
      main: '#0165ad',
      dark: '#015b9b',
      variant2: '#004068',
      variant3: '#00CAFF',
      variant4: 'rgb(19, 19, 40)'
    },
    secondary: {
      main: '#af8812',
      dark: '#9b7c0c',
      light: '#cc9d11'
    },
    tertiary: {
      main: '#690b04',
      dark: '#480702',
      light: '#a41005'
    }
  }
});

export const appBarHeight = isMobile ? '56px' : '70px';
export const scrollOffset = isMobile ? -56 : 0;

export const StandardButton = styled(Button)(() => ({
  textTransform: 'none'
}));

export const TypographyWhite = styled(Typography)(() => ({
  color: 'white'
}));

export const GreenButton = styled(StandardButton)(() => ({
  background: 'green',
  '&:hover': {
    background: 'rgb(0, 115, 0)'
  }
}));