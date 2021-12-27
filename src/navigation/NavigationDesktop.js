import {Link} from "react-scroll";
import {AppBar, Box, Toolbar, styled} from "@mui/material";
import {appBarHeight, scrollOffset, theme} from "../Util";
import SPAC from "../assets/spaclogo.png";
import {useEffect, useState} from "react";

const DesktopMenuButton = styled(Link)(({theme}) => ({
  backgroundColor: 'rgb(0, 0, 0, 0)',
  color: theme.typography.color,
  fontFamily: theme.typography.fontFamily,
  cursor: 'pointer',
  marginRight: '1rem',
  fontWeight: 450,
  //it is a class called active and not the active selector
  '&.active': {
    color: theme.palette.primary['variant3']
  },
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const RegisterButton = styled(DesktopMenuButton)(({theme}) => ({
  borderRadius: '4px',
  border: '4px solid rgba(0, 0, 0, 0)',
  outline: `2px solid ${theme.palette.primary['veryLight']}`,
  '&:hover': {
    backgroundColor: '4px solid rgba(0, 0, 0, 0)',
  },
  '&.active': {
    border: `4px solid rgba(0, 0, 0, 0)`,
    outline: `2px solid ${theme.palette.primary['variant3']}`
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
  const [background, setBackground] = useState(theme.palette.primary['variant4']);

  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      for (let mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = /** Element */ mutation.target;
          setBackground((target.classList.contains('active')) ? theme.palette.primary.main : theme.palette.primary['variant4']);
        }
      }
    });

    const about = document.querySelector('.aboutButton');
    observer.observe(about, {attributes: true});

    return () => observer.disconnect();
  }, []);

  function setHash(name) {
    window.location.hash = name;
  }

  const scrollToHome = () => {
    window.scrollTo(0, 0);
    window.location.hash = '';
  }

  return (
    <AppBar sx={{backgroundColor: background}}>
      <NavBar>
        <SPACLogo src={SPAC} alt='SPAC logo' onClick={scrollToHome}/>
        <Box>
          <DesktopMenuButton to='about' spy={true} smooth={true} offset={scrollOffset} className='aboutButton'
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
