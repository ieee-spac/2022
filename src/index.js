import React from 'react';
import ReactDOM from 'react-dom';
//Imports the font
import "@fontsource/roboto";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/300.css";
//Contains any styles that could not be done via MUI or inline
import './App.css';
//Imports styling for lightbox
import 'react-image-lightbox/style.css';
import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
import {OrientationApp} from "./App";

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

ReactDOM.render(<OrientationApp storage={storage}/>, document.getElementById('root'));