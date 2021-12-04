import React, {useEffect} from "react";
import {StyledEngineProvider, ThemeProvider} from "@mui/material/styles";
import {scrollOffset, theme} from "./Util";
import Navigation from "./navigation/Navigation";
import Home from "./Home";
import {Box, styled} from "@mui/material";
import {Element, scroller} from "react-scroll";
import About from "./About";
import Register from "./register/Register";
import Schedule from "./schedule/Schedule";
import Patronage from "./Patronage";
import Gallery from "./gallery/Gallery";
import FAQ from "./faq/FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import {isMobile, withOrientationChange} from "react-device-detect";

const sections = ['about', 'register', 'schedule', 'patronage', 'gallery', 'faq', 'contact'];

const Section = styled(Element)(({padding}) => ({
  padding: `0 ${padding} 0 ${padding}`
}));

function App({isPortrait, storage}) {
  //Provides a padding prop to the styled component above
  Section.defaultProps = {padding: getContentPadding(isPortrait)}

  useEffect(() => {
    setTimeout(() => {
      if (window.location.hash) {
        const section = window.location.hash.substring(1);
        if (sections.includes(section)) {
          scroller.scrollTo(section, {
            offset: scrollOffset
          });
        }
      }
    }, 200);
  }, []);

  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Navigation/>
          <Home isPortrait={isPortrait}/>
          <Box>
            <Section name='about' sx={{backgroundColor: 'rgb(0, 15, 33)'}}>
              <About isPortrait={isPortrait}/>
            </Section>
            <Section name='register'>
              <Register isPortrait={isPortrait} storage={storage}/>
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
            <Section name='contact'>
              <Contact isPortrait={isPortrait}/>
            </Section>
            <Footer isPortrait={isPortrait}/>
          </Box>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

function getContentPadding(isPortrait) {
  if (isPortrait && isMobile) {
    return '1em';
  }
  return '15%';
}

export const OrientationApp = withOrientationChange(App);