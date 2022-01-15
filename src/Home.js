import {Box, Button, styled, Typography} from "@mui/material";
import background from './assets/bg_website.png';
import {
  appBarHeight, PulseButton,
  scrollOffset,
} from "./Util";
import Handshake from './assets/handshake4.png';
import {scroller} from "react-scroll";
import {isMobile} from "react-device-detect";

const Background = styled('img')({
  position: 'absolute',
  objectFit: 'cover',
  minWidth: '100%',
  maxWidth: '100%',
  height: '100vh',
  zIndex: -2
});

const HomeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${appBarHeight})`,
});

const ButtonsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  height: '3em',
  alignItems: 'center',
  marginTop: 'auto',
  paddingTop: '1rem',
  marginBottom: '4rem',
  minWidth: '45%',
  marginLeft: 'auto',
  marginRight: 'auto'
});

const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center'
});

const SPACLogo = styled('img')({
  height: 'auto'
});

const BlueText = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main
}));

export default function Home({isPortrait}) {
  const titleStyle = getTitleStyle(isPortrait);
  const spacSize = getSpacSize(isPortrait);

  return (
    <Box sx={{width: '100%', minHeight: !isMobile ? '751px' : ''}}>
      <Background src={background} alt='background' sx={{minHeight: !isMobile ? '780px' : ''}}/>
      <HomeContainer sx={{paddingTop: appBarHeight}}>
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <BlueText variant='h1' sx={titleStyle}>
            SPAC 2022
          </BlueText>
          <Typography variant='h2' sx={{textAlign: 'center', ...spacSize}}>
            Student Professional Awareness Conference
          </Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 'auto'}}>
          <SPACLogo src={Handshake} alt='SPAC Logo' sx={{maxWidth: getLogoSize(isPortrait)}}/>
        </Box>
        <Box sx={{maxWidth: '1rem', mt: 'auto'}}/>
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Typography variant='h3' sx={getDateStyle(isPortrait)}>
            January 20, 2022&nbsp;&nbsp;|&nbsp;&nbsp;Online on Hopin
          </Typography>
        </Box>
        <ButtonsContainer>
          <ButtonContainer>
            <Button variant='outlined' onClick={() => scrollTo('about')}>
              Join 2023 Team
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <PulseButton variant='contained' sx={{height: 'min-content'}} onClick={() => scrollTo('register')}>
              Tickets
            </PulseButton>
          </ButtonContainer>
          <ButtonContainer>
            <Button variant='outlined' onClick={() => scrollTo('patronage')}>Sponsor Us</Button>
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

function getTitleStyle(isPortrait) {
  if (isMobile) {
    if (isPortrait) {
      return {fontSize: '4rem', marginTop: '0.5rem', textAlign: 'center'};
    } else {
      return {fontSize: '3rem', textAlign: 'center'};
    }
  }
  return {fontSize: '6rem', marginTop: '1rem', textAlign: 'center'};
}

function getSpacSize(isPortrait) {
  if (isMobile) {
    if (!isPortrait) {
      return {fontSize: '2rem', mb: '0.3rem'};
    }
    return {fontSize: '2rem', mb: '1rem'};
  }
  return {mb: '1rem'};
}

function getDateStyle(isPortrait) {
  if (isMobile) {
    if (isPortrait) {
      return {marginTop: '1rem', textAlign: 'center', fontSize: '1.4rem'};
    } else {
      return {marginTop: '0.5rem', textAlign: 'center', fontSize: '1.6rem'};
    }
  }
  return {marginTop: '2rem', textAlign: 'center'};
}

function getLogoSize(isPortrait) {
  if (isMobile && !isPortrait) {
    return '4rem'
  }
  return '16rem';
}
