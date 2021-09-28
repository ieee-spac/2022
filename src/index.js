import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation/Navigation';
//This imports the font
import 'typeface-roboto'
import {ThemeProvider, StyledEngineProvider} from '@mui/material/styles';
import {theme} from "./util";
import About from "./About";
import Home from "./Home";
import Schedule from "./schedule/Schedule";
import Patronage from "./Patronage";
import Register from "./Register";
import Contact from "./Contact";
import Gallery from "./gallery/Gallery";
import FAQ from "./faq/FAQ";
import {Element} from 'react-scroll'
import {Box, styled} from "@mui/material";
//Contains any styles that could not be done via MUI or inline
import './App.css';
//Imports styling for lightbox
import 'react-image-lightbox/style.css';
import {isMobile, withOrientationChange} from "react-device-detect";
import Footer from "./Footer";

const Section = styled(Element)(() => ({
  paddingBottom: '5em'
}));

function getContentMargin(isPortrait) {
  if (isPortrait && isMobile) {
    return '1em';
  }
  return '15%';
}

const App = props => {
  const {isPortrait} = props;
  const margin = getContentMargin(isPortrait);

  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Navigation/>
          <Home isPortrait={isPortrait}/>
          <Box>
            <Section name='about' style={{padding: `0 ${margin} 0 ${margin}`, backgroundColor: theme.palette.primary['variant4']}}>
              <About/>
            </Section>
            <Section name='register' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <Register isPortrait={isPortrait}/>
            </Section>
            <Section name='schedule' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <Schedule/>
            </Section>
            <Section name='patronage' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <Patronage/>
            </Section>
            <Section name='gallery' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <Gallery/>
            </Section>
            <Section name='faq' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <FAQ/>
            </Section>
            <Element name='contact' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <Contact isPortrait={isPortrait}/>
            </Element>
            <Footer isPortrait={isPortrait}/>
          </Box>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

const OrientationApp = withOrientationChange(App);

ReactDOM.render(<OrientationApp/>, document.getElementById('root'));