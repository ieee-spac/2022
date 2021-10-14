import {createTheme} from "@mui/material/styles";
import {isMobile} from "react-device-detect";
import {Box, Button, styled, Typography} from "@mui/material";

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
      fontWeight: 900
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
      light: '#3383bd',
      variant2: '#004068',
      variant3: '#00CAFF',
      variant4: '#131328'
    },
    secondary: {
      main: '#af8812',
      dark: '#9b7c0c',
      light: '#cc9d11'
    },
    tertiary: {
      main: '#810e05',
      dark: '#480702',
      light: '#9b0f05'
    }
  }
});

export const appBarHeight = isMobile ? '56px' : '70px';
export const scrollOffset = isMobile ? -56 : 0;

export const StandardButton = styled(Button)({
  textTransform: 'none'
});

export const PulseButton = styled(StandardButton)({
  animation: 'pulse 0.7s infinite',
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)'
    },
    '100%': {
      transform: 'scale(1.1)'
    }
  }
});

export const LightText = styled(Typography)({
  color: 'white'
});

export const GreenButton = styled(StandardButton)({
  background: 'green',
  '&:hover': {
    background: 'rgb(0, 115, 0)'
  }
});

export const RedButton = styled(StandardButton)({
  background: theme.palette['tertiary'].light,
  '&:hover': {
    background: theme.palette['tertiary'].main
  }
});

export function RequiredField(name) {
  return (
    <Box key={name} sx={{display: 'flex', flexDirection: 'row'}}>
      {name}
      <Box sx={{color: 'red', marginLeft: '0.2rem'}}>*</Box>
    </Box>
  );
}