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
import {Box} from "@mui/material";
//Contains any styles that could not be done via MUI or inline
import './App.css';
//Imports styling for lightbox
import 'react-image-lightbox/style.css';
import {isMobile, withOrientationChange} from "react-device-detect";
import Footer from "./Footer";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

function getContentMargin(isPortrait) {
  if (isPortrait && isMobile) {
    return '1em';
  }
  return '15%';
}

const firebaseConfig = {
  apiKey: "AIzaSyAdsG51usHQMVONrx9x3TzQC6gOy1Cvfj8",
  authDomain: "ieee-spac.firebaseapp.com",
  projectId: "ieee-spac",
  storageBucket: "ieee-spac.appspot.com",
  messagingSenderId: "616006840653",
  appId: "1:616006840653:web:245f962575e995fa2e8704",
  measurementId: "G-ZZBFTR45GR"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

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
            <Element name='about' style={{padding: `0 ${margin} 0 ${margin}`, backgroundColor: theme.palette.primary['variant4']}}>
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

const OrientationApp = withOrientationChange(App);

ReactDOM.render(<OrientationApp/>, document.getElementById('root'));