import React, {useEffect} from "react";
import {StyledEngineProvider, ThemeProvider} from "@mui/material/styles";
import {scrollOffset, theme} from "./util";
import Navigation from "./navigation/Navigation";
import Home from "./Home";
import {Box} from "@mui/material";
import {Element, scroller} from "react-scroll";
import About from "./About";
import Register from "./Register";
import Schedule from "./schedule/Schedule";
import Patronage from "./Patronage";
import Gallery from "./gallery/Gallery";
import FAQ from "./faq/FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import {isMobile, withOrientationChange} from "react-device-detect";

const sections = ['about', 'register', 'schedule', 'patronage', 'gallery', 'faq', 'contact'];

function App({isPortrait, storage}) {
  const margin = getContentMargin(isPortrait);

  useEffect(() => {
    setTimeout(() => {
      if (window.location.hash) {
        const section = window.location.hash.substring(1);
        if (sections.includes(section)) {
          scroller.scrollTo(window.location.hash.substring(1), {
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
            <Element name='about'
                     style={{padding: `0 ${margin} 0 ${margin}`, backgroundColor: theme.palette.primary['variant4']}}>
              <About isPortrait={isPortrait}/>
            </Element>
            <Element name='register' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <Register isPortrait={isPortrait} storage={storage}/>
            </Element>
            <Element name='schedule' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <Schedule/>
            </Element>
            <Element name='patronage' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <Patronage/>
            </Element>
            <Element name='gallery' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <Gallery/>
            </Element>
            <Element name='faq' style={{padding: `0 ${margin} 0 ${margin}`}}>
              <FAQ/>
            </Element>
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

function getContentMargin(isPortrait) {
  if (isPortrait && isMobile) {
    return '1em';
  }
  return '15%';
}

export const OrientationApp = withOrientationChange(App);