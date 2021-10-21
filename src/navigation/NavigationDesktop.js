import {Link} from "react-scroll";
import {AppBar, Box, Toolbar, styled} from "@mui/material";
import {appBarHeight, scrollOffset} from "../Util";
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
  borderRadius: '4px',
  border: `4px solid ${theme.palette.primary.main}`,
  outline: '2px solid white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    border: `4px solid ${theme.palette.primary.dark}`
  }
}));

const NavBar = styled(Toolbar)({
  '&.MuiToolbar-root': {
    minHeight: appBarHeight,
    height: appBarHeight,
    paddingLeft: '2rem',
    paddingRight: '1rem'
  }
});

const SPACLogo = styled('img')({
  width: '10em',
  cursor: 'pointer',
  marginRight: 'auto'
});

export default function DesktopNav() {
  function setHash(name) {
    window.location.hash = name;
  }

  const scrollToHome = () => {
    window.scrollTo(0, 0);
    window.location.hash = '';
  }

  return (
    <AppBar>
      <NavBar>
        <SPACLogo src={SPAC} alt='SPAC logo' onClick={scrollToHome}/>
        <Box>
          <DesktopMenuButton to='about' spy={true} smooth={true} offset={scrollOffset}
                             onClick={() => setHash('about')}>About</DesktopMenuButton>
          <RegisterButton to='register' spy={true} smooth={true} offset={scrollOffset}
                          onClick={() => setHash('register')}>Register</RegisterButton>
          <DesktopMenuButton to='schedule' spy={true} smooth={true} offset={scrollOffset}
                             onClick={() => setHash('schedule')}>Schedule</DesktopMenuButton>
          <DesktopMenuButton to='patronage' spy={true} smooth={true} offset={scrollOffset}
                             onClick={() => setHash('patronage')}>Patronage</DesktopMenuButton>
          <DesktopMenuButton to='gallery' spy={true} smooth={true} offset={scrollOffset}
                             onClick={() => setHash('gallery')}>Gallery</DesktopMenuButton>
          <DesktopMenuButton to='faq' spy={true} smooth={true} offset={scrollOffset}
                             onClick={() => setHash('faq')}>FAQ</DesktopMenuButton>
          <DesktopMenuButton to='contact' spy={true} smooth={true} offset={scrollOffset}
                             onClick={() => setHash('contact')}>Contact Us</DesktopMenuButton>
        </Box>
      </NavBar>
    </AppBar>
  );
}