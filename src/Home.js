import {Box, Button, Container, Typography} from "@mui/material";
import animatedBackground from './assets/technology.mp4';
import styled from "@emotion/styled";
import {appBarHeight, StandardButton} from "./util";
import IEEE from './assets/ieee.png';

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
  background: 'linear-gradient(180deg, rgba(3, 14, 38, 0.5) 0%, rgba(3, 14, 38, 1) 100%)',
  zIndex: -1
}));

export default function Home() {
  return (
    <Box sx={{minHeight: '100vh', width: '100%'}}>
      <VideoOverlay/>
      <Video autoPlay muted loop>
        <source src={animatedBackground} type="video/mp4"/>
      </Video>
      <Box sx={{paddingTop: appBarHeight}}/>
      <Box sx={{alignItems: 'center', display: 'flex', flexDirection: 'column', paddingTop: '10em'}}>
        <img src={IEEE} style={{width: '20em'}} alt='IEEE Logo'/>
        <Typography variant='h4' sx={{marginBottom: '3em', textAlign: 'center'}}>Student Professional Awareness Conference</Typography>
        <Typography sx={{fontSize: '40px', fontWeight: 300}}>January ?, 2022</Typography>
        <Typography sx={{textAlign: 'center'}}>Insert detail about where event is held</Typography>
        <Box sx={{marginTop: '5em'}}>
          <StandardButton variant='contained' color='secondary' sx={{marginRight: '2em'}}>Register Now</StandardButton>
          <StandardButton className='GreenButton' variant='contained' sx={{marginLeft: '2em'}}>Sponsor Us</StandardButton>
        </Box>
        <StandardButton sx={{marginTop: '1em'}} variant='contained'>Read More</StandardButton>
      </Box>
    </Box>
  )
}