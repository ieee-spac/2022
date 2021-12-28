import {createTheme} from "@mui/material/styles";
import {isMobile} from "react-device-detect";
import {Box, Button, styled, Typography} from "@mui/material";
import Link from "@mui/material/Link";

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
      main: '#16639D',
      dark: '#005187',
      light: '#3383bd',
      veryLight: 'rgb(92, 198, 255)',
      variant3: '#00CAFF',
      variant4: '#002233'
    },
    secondary: {
      main: '#af8812',
      dark: '#9b7c0c',
      light: '#cc9d11'
    },
    orange: {
      light: '#FF8A3D',
      main: '#FF8132'
    },
    green: {
      light: '#70AF70',
      main: 'rgb(20, 145, 20)'
    }
  }
});

export const appBarHeight = isMobile ? '56px' : '70px';
//appBarHeight - 1 to avoid bug with 1px gap
export const scrollOffset = isMobile ? -55 : -69;

const StandardButton = styled(Button)({
  textTransform: 'none',
});

export const BlueButton = styled(StandardButton)({
  background: theme.palette.primary.light,
  '&:hover': {
    background: theme.palette.primary.main,
  }
});


export const GreenButton = styled(StandardButton)({
  background: theme.palette['green'].light,
  '&:hover': {
    background: theme.palette['green'].main
  }
});

export const PulseButton = styled(Button)({
  animation: 'pulse 0.3s infinite alternate',
  backfaceVisibility: 'hidden',
  transform: 'translateZ(0)',
  '-webkit-font-smoothing': 'subpixel-antialiased',
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

export function RequiredField(name) {
  return (
    <Box key={name} sx={{display: 'flex', flexDirection: 'row'}}>
      {name}
      <Box sx={{color: 'red', marginLeft: '0.2rem'}}>*</Box>
    </Box>
  );
}

export const Discord = () => (
  <Link href='https://discord.gg/nTzgsAXr' target='_blank'>
    Discord
  </Link>
)
