import {Box, styled} from "@mui/material";
import animatedBackground from '../assets/technology.mp4';
import {
  appBarHeight,
  GreenButton,
  scrollOffset,
  LightText,
  PulseButton,
  RedButton
} from "../Util";
import Handshake from '../assets/handshake.png';
import {scroller} from "react-scroll";

const minHeight = '820px';

const Video = styled('video')({
  position: 'absolute',
  objectFit: 'cover',
  minWidth: '100%',
  maxWidth: '100%',
  minHeight: `${minHeight}`,
  height: '100vh',
  zIndex: -2
});

const VideoOverlay = styled(Box)({
  position: 'absolute',
  objectFit: 'cover',
  minWidth: '100%',
  maxWidth: '100%',
  minHeight: `${minHeight}`,
  height: '100vh',
  background: 'linear-gradient(90deg, rgba(30, 232, 252, 0.4) 0%, rgba(146, 170, 245, 0.4) 100%)',
  zIndex: -1
});

const HomeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${appBarHeight})`,
});

const ButtonsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  height: '3em',
  alignItems: 'center',
  marginTop: 'auto',
  marginBottom: '4rem'
});

const ButtonContainer = styled(Box)({
  mx: '2rem',
  width: '10rem',
  display: 'flex',
  justifyContent: 'center'
});

const SPACLogo = styled('img')({
  maxWidth: '12rem',
  height: 'fit-content',
});

export default function Home({isPortrait}) {
  return (
    <Box sx={{minHeight: `${minHeight}`, width: '100%'}}>
      <VideoOverlay/>
      <Video autoPlay muted loop>
        <source src={animatedBackground} type="video/mp4"/>
      </Video>
      <HomeContainer sx={{paddingTop: appBarHeight}}>
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <LightText variant='h1' sx={{fontSize: '6rem', marginTop: '2rem'}}>SPAC 2022</LightText>
          <LightText variant='h2' sx={{marginBottom: '1rem'}}>
            Student Professional Awareness Conference
          </LightText>
          <SPACLogo src={Handshake} alt='SPAC Logo'/>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 'auto'}}>
          <LightText variant='h3' sx={{marginTop: '5rem'}}>
            January 20, 2022&nbsp;&nbsp;|&nbsp;&nbsp;Online on Aventri
          </LightText>
        </Box>
        <ButtonsContainer>
          <ButtonContainer>
            <RedButton variant='contained' onClick={() => scrollTo('about')}>
              Read More
            </RedButton>
          </ButtonContainer>
          <ButtonContainer>
            <PulseButton variant='contained' sx={{height: 'min-content'}} color='secondary'
                         onClick={() => scrollTo('register')}>
              Register Now
            </PulseButton>
          </ButtonContainer>
          <ButtonContainer>
            <GreenButton variant='contained' onClick={() => scrollTo('patronage')}>Sponsor Us</GreenButton>
          </ButtonContainer>
        </ButtonsContainer>
      </HomeContainer>
    </Box>
  )
}

function scrollTo(elName) {
  scroller.scrollTo(elName, {
    smooth: true,
    offset: scrollOffset
  });
  window.location.hash = elName;
}