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
    color: theme.palette.primary['variant3']
  },
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const RegisterButton = styled(DesktopMenuButton)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '4px',
  border: `5px solid ${theme.palette.primary.main}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    border: `5px solid ${theme.palette.primary.dark}`
  }
}));

const NavBar = styled(Toolbar)({
  '&.MuiToolbar-root': {
    minHeight: appBarHeight,
    height: appBarHeight,
    justifyContent: 'space-evenly'
  }
});

export default function DesktopNav() {
  let trigger = useScrollTrigger();
  const [allowScrollTrigger, setAllowScrollTrigger] = useState(true);
  const [showAppBar, setShowAppBar] = useState(true);

  function blockScrollTrigger(elName) {
    setAllowScrollTrigger(false);
    setTimeout(() => {
      setAllowScrollTrigger(true);
    }, 1100);
    window.location.hash = elName;
  }

  useEffect(() => {
    if (allowScrollTrigger) {
      setShowAppBar(!trigger);
    }
  }, [allowScrollTrigger, trigger]);

  return (
    <Slide disabled={isMobile} appear={false} direction="down" in={showAppBar}>
      <AppBar sx={{backgroundColor: 'rgb(20, 20, 20, 0.7)'}}>
        <NavBar>
          <img src={SPAC} alt='SPAC logo' style={{width: '10em', cursor: 'pointer'}} onClick={() => window.scrollTo(0, 0)}/>
          <Box>
            <DesktopMenuButton to='about' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger('about')}>About</DesktopMenuButton>
            <RegisterButton to='register' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger('register')}>Register</RegisterButton>
            <DesktopMenuButton to='schedule' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger('schedule')}>Schedule</DesktopMenuButton>
            <DesktopMenuButton to='patronage' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger('patronage')}>Patronage</DesktopMenuButton>
            <DesktopMenuButton to='gallery' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger('gallery')}>Gallery</DesktopMenuButton>
            <DesktopMenuButton to='faq' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger('faq')}>FAQ</DesktopMenuButton>
            <DesktopMenuButton to='contact' spy={true} smooth={true}
                               onClick={() => blockScrollTrigger('contact')}>Contact Us</DesktopMenuButton>
          </Box>
        </NavBar>
      </AppBar>
    </Slide>
  );
}