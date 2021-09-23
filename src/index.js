import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation/Navigation';
import 'typeface-roboto'
import {ThemeProvider, StyledEngineProvider} from '@mui/material/styles';
import {theme} from "./util";
import About from "./About";
import Home from "./Home";
import Schedule from "./Schedule";
import Patronage from "./Patronage";
import Register from "./Register";
import Contact from "./Contact";
import Gallery from "./Gallery";
import FAQ from "./faq/FAQ";
import {Element} from 'react-scroll'
import {Box} from "@mui/material";
import './css/App.css';
import {isMobile, withOrientationChange} from "react-device-detect";
import Wave from './assets/wave.svg';
import styled from "@emotion/styled";

const Section = styled(Element)(() => ({
  paddingBottom: '5em'
}));

function getContentMargin(isPortrait) {
  if (isPortrait && isMobile) {
    return '1em';
  }
  return '15%';
}

//TODO make better layered steps wave here https://app.haikei.app/
const App = props => {
  const {isPortrait} = props;
  const margin = getContentMargin(isPortrait);

  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Navigation/>
          <Home/>
          <Box sx={{
            backgroundImage: `url(${Wave}), linear-gradient(180deg, rgba(3, 14, 38, 1) 0%, rgba(0, 81, 97, 1) 100%)`,
            backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', padding: `0 ${margin} 0 ${margin}`
          }}>
            <Section name='about'>
              <About/>
            </Section>
            <Section name='register'>
              <Register/>
            </Section>
            <Section name='schedule'>
              <Schedule/>
            </Section>
            <Section name='patronage'>
              <Patronage/>
            </Section>
            <Section name='gallery'>
              <Gallery/>
            </Section>
            <Section name='faq'>
              <FAQ/>
            </Section>
            <Element name='contact'>
              <Contact/>
            </Element>
          </Box>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

const OrientationApp = withOrientationChange(App);

ReactDOM.render(<OrientationApp/>, document.getElementById('root'));