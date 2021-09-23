import {createTheme} from "@mui/material/styles";
import {isMobile} from "react-device-detect";
import styled from "@emotion/styled";
import {Button, TextField} from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    allVariants: {
      color: 'white'
    },
    h6: {
      fontWeight: 'normal'
    }
  },
  palette: {
    secondary: {
      main: '#af8812',
      dark: '#9b7c0c'
    },
    tertiary: {
      main: '#690b04',
      dark: '#480702'
    }
  }
});

export const appBarHeight = isMobile ? '56px' : '70px';
export const scrollOffsetMobile = -56;

export const Input = styled(TextField)(() => ({
}));

export const StandardButton = styled(Button)(() => ({
  textTransform: 'none'
}));