import {Box, styled} from "@mui/material";
import animatedBackground from './assets/technology.mp4';
import {appBarHeight, GreenButton, scrollOffset, StandardButton, theme, TypographyWhite} from "./util";
import IEEE from './assets/ieee.png';
import {scroller} from "react-scroll";
import {isMobile} from "react-device-detect";

const Video = styled('video')(() => ({
  position: 'absolute',
  objectFit: 'cover',
  minWidth: '100%',
  maxWidth: '100%',
  minHeight: '100vh',
  zIndex: -2
}));

const VideoOverlay = styled(Box)(() => ({
  position: 'absolute',
  objectFit: 'cover',
  minWidth: '100%',
  maxWidth: '100%',
  minHeight: '100vh',
  background: `linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(19, 19, 40, 0.5) 90%, ${theme.palette.primary['variant4']} 100%)`,
  zIndex: -1
}));

const TitleTypography = styled(TypographyWhite)(() => ({
  textAlign: 'center',
  fontSize: isMobile ? theme.typography.h5.fontSize : theme.typography.h1.fontSize
}));

const HomeContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${appBarHeight})`
}));

const HomeSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export default function Home({isPortrait}) {
  const rowButtons = isMobile && !isPortrait;
  const titleFontSize = getTitleFontSize(isPortrait, isMobile);

  function scrollTo(elName) {
    scroller.scrollTo(elName, {
      smooth: true,
      offset: scrollOffset
    });
  }

  return (
    <Box sx={{minHeight: '100vh', width: '100%'}}>
      <VideoOverlay/>
      <Video autoPlay muted loop>
        <source src={animatedBackground} type="video/mp4"/>
      </Video>
      <Box sx={{paddingTop: appBarHeight}}/>
      <HomeContainer sx={{justifyContent: rowButtons ? 'space-around' : 'space-evenly'}}>
        <HomeSection>
          <TitleTypography variant='h1' sx={{fontSize: titleFontSize}}>
            Student Professional Awareness Conference
          </TitleTypography>
          <img src={IEEE} style={{width: isMobile ? '6rem' : '10rem'}} alt='IEEE Logo'/>
        </HomeSection>
        <HomeSection>
          <TypographyWhite variant='h2'>January ?, 2022</TypographyWhite>
          <TypographyWhite>Insert detail about where event is held</TypographyWhite>
        </HomeSection>
        <HomeSection>
          <Box sx={{display: 'flex', flexDirection: rowButtons ? 'row' : 'column'}}>
            <Box>
              <StandardButton variant='contained' color='secondary' onClick={() => scrollTo('register')}
                              sx={{marginRight: rowButtons ? '0.6rem' : '2rem'}}>
                Register Now
              </StandardButton>
              <GreenButton variant='contained' onClick={() => scrollTo('patronage')}
                           sx={{marginLeft: rowButtons ? '0.6rem' : '2rem', marginRight: rowButtons ? '0.6rem' : 0}}>
                Sponsor Us
              </GreenButton>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: rowButtons ? 0 : '2rem',
              marginBottom: rowButtons ? '4rem' : 0
            }}>
              <StandardButton onClick={() => scrollTo('about')} sx={{marginLeft: rowButtons ? '0.6rem' : 0}}
                              variant='contained'>Read More</StandardButton>
            </Box>
          </Box>
        </HomeSection>
      </HomeContainer>
    </Box>
  )
}

function getTitleFontSize(isPortrait, isMobile) {
  if (!isMobile) {
    return '3.5rem';
  }
  if (isMobile && !isPortrait) {
    return '2.3rem';
  }
  return theme.typography.h1.fontSize;
}