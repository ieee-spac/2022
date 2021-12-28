import React, {useEffect} from "react";
import {scrollOffset, theme} from "./Util";
import Navigation from "./navigation/Navigation";
import Home from "./Home";
import {Box, styled, StyledEngineProvider, ThemeProvider, Divider} from "@mui/material";
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

const HoverSection = styled(Section)({
  '&:hover': {
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary['veryLight']}, white 100%)`,
    backgroundSize: '15%',
    backgroundRepeat: 'no-repeat'
  }
});

const Divide = styled(Divider)(({theme}) => ({
  background: theme.palette.primary.dark,
  width: '100%',
  marginBottom: '-1px',
  height: '1px'
}));

function App({isPortrait, storage}) {
  //Provides a padding prop to the styled Section component above
  Section.defaultProps = {padding: getContentPadding(isPortrait)}
  HoverSection.defaultProps = {padding: getContentPadding(isPortrait)}

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
            <Divide sx={{backgroundColor: 'rgb(0, 15, 33)'}}/>
            <HoverSection name='register'>
              <Register isPortrait={isPortrait} storage={storage}/>
            </HoverSection>
            <Divide/>
            <HoverSection name='schedule'>
              <Schedule/>
            </HoverSection>
            <Divide/>
            <HoverSection name='patronage'>
              <Patronage/>
            </HoverSection>
            <Divide/>
            <HoverSection name='gallery'>
              <Gallery/>
            </HoverSection>
            <Divide/>
            <HoverSection name='faq'>
              <FAQ/>
            </HoverSection>
            <Divide/>
            <HoverSection name='contact'>
              <Contact isPortrait={isPortrait}/>
            </HoverSection>
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
