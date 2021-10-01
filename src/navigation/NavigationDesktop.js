import {Link} from "react-scroll";
import {AppBar, Box, Slide, Toolbar, useScrollTrigger, styled} from "@mui/material";
import {isMobile} from "react-device-detect";
import {useEffect, useState} from "react";
import {appBarHeight} from "../util";
import SPAC from "../assets/spaclogo.png";

const DesktopMenuButton = styled(Link)(({theme}) => ({
  backgroundColor: 'rgb(0, 0, 0, 0)',
  color: theme.typography.color,
  fontFamily: theme.typography.fontFamily,
  cursor: 'pointer',
  marginRight: '1rem',
  fontWeight: 450,
  //Yes, it is a class called active and not the active selector
  '&.active': {
    color: 'cadetblue'
  }
}));

export default function DesktopNav() {
  let trigger = useScrollTrigger();
  const [allowScrollTrigger, setAllowScrollTrigger] = useState(true);
  const [showAppBar, setShowAppBar] = useState(true);

  function blockScrollTrigger() {
    setAllowScrollTrigger(false);
    setTimeout(() => {
      setAllowScrollTrigger(true);
    }, 1100)
  }

  useEffect(() => {
    if (allowScrollTrigger) {
      setShowAppBar(!trigger);
    }
  }, [allowScrollTrigger, trigger]);

  return (
    <Slide disabled={isMobile} appear={false} direction="down" in={showAppBar}>
      <AppBar sx={{backgroundColor: 'rgb(20, 20, 20, 0.7)'}}>
        <Toolbar /*style used for higher specificity*/
          style={{minHeight: appBarHeight, height: appBarHeight, justifyContent: 'space-evenly'}}>
          <img src={SPAC} alt='SPAC logo' style={{width: '10em', cursor: 'pointer'}} onClick={() => window.scrollTo(0, 0)}/>
          <Box>
            <DesktopMenuButton className='Test' to='about' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger()}>About</DesktopMenuButton>
            <DesktopMenuButton to='register' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger()}>Register</DesktopMenuButton>
            <DesktopMenuButton to='schedule' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger()}>Schedule</DesktopMenuButton>
            <DesktopMenuButton to='patronage' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger()}>Patronage</DesktopMenuButton>
            <DesktopMenuButton to='gallery' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger()}>Gallery</DesktopMenuButton>
            <DesktopMenuButton to='faq' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger()}>FAQ</DesktopMenuButton>
            <DesktopMenuButton to='contact' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger()}>Contact Us</DesktopMenuButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}