import {useEffect, useState} from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  ListItem,
  styled,
  Toolbar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {appBarHeight, scrollOffset, theme} from "../Util";
import List from "@mui/material/List";
import {Link} from "react-scroll";
import SPAC from "../assets/spaclogo.png";
import IEEE from '../assets/IEEE.png';

const MobileMenuButton = styled(Link)(({theme}) => ({
  color: 'rgba(0, 0, 0, 0.6)',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.875rem',
  fontWeight: 700,
  width: '100%',
  height: '100%',
  padding: '14px 16px 14px 16px',
  //it is a class called active and not the active selector
  '&.active': {
    color: theme.palette.primary['variant3']
  }
}));

const MenuItem = styled(ListItem)({
  padding: 0
});

const NavBar = styled(Toolbar)({
  '&.MuiToolbar-root': {
    minHeight: appBarHeight,
    height: appBarHeight
  }
});

const SPACLogo = styled('img')({
  width: '7rem',
  marginRight: '1.5rem'
});

const IEEELogo = styled('img')({
  width: '3rem',
  marginBottom: '1.2rem'
});

export default function MobileNav() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [background, setBackground] = useState(theme.palette.primary['variant4']);

  useEffect(() => {
    const onScroll = () => {
      const active = document.querySelectorAll('.aboutCheck.active');
      setBackground(active.length === 0 ? theme.palette.primary['variant4'] : theme.palette.primary.main);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function hideDrawer(elName) {
    setShowDrawer(false);
    window.location.hash = elName;
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
    window.location.hash = '';
  }

  return (
    <AppBar sx={{zIndex: theme.zIndex.drawer + 1, backgroundColor: background}}>
      <NavBar>
        <IconButton sx={{marginRight: '1rem'}} onClick={() => setShowDrawer(!showDrawer)} color="inherit"
                    aria-label="open drawer">
          <MenuIcon/>
        </IconButton>
        <Link className='aboutCheck' to='about' spy={true} offset={scrollOffset}/>
        <Drawer
          open={showDrawer}
          anchor={'top'}
          onClose={() => setShowDrawer(false)}
        >
          <Box role="presentation" sx={{marginTop: appBarHeight}}>
            <List>
              <MenuItem button>
                <MobileMenuButton to='about' offset={scrollOffset} spy={true} smooth={true}
                                  onClick={() => hideDrawer('about')}>About</MobileMenuButton>
              </MenuItem>
              <MenuItem button>
                <MobileMenuButton to='register' offset={scrollOffset} spy={true} smooth={true}
                                  sx={{backgroundColor: theme.palette.primary['gradient']}}
                                  onClick={() => hideDrawer('register')}>Tickets</MobileMenuButton>
              </MenuItem>
              <MenuItem button>
                <MobileMenuButton to='schedule' offset={scrollOffset} spy={true} smooth={true}
                                  onClick={() => hideDrawer('schedule')}>Schedule</MobileMenuButton>
              </MenuItem>
              <MenuItem button>
                <MobileMenuButton to='patronage' offset={scrollOffset} spy={true} smooth={true}
                                  onClick={() => hideDrawer('patronage')}>Patronage</MobileMenuButton>
              </MenuItem>
              <MenuItem button>
                <MobileMenuButton to='gallery' offset={scrollOffset} spy={true} smooth={true}
                                  onClick={() => hideDrawer('gallery')}>Gallery</MobileMenuButton>
              </MenuItem>
              <MenuItem button>
                <MobileMenuButton to='faq' offset={scrollOffset} spy={true} smooth={true}
                                  onClick={() => hideDrawer('faq')}>FAQ</MobileMenuButton>
              </MenuItem>
              <MenuItem button>
                <MobileMenuButton to='contact' offset={scrollOffset} spy={true} smooth={true}
                                  onClick={() => hideDrawer('contact')}>Contact Us</MobileMenuButton>
              </MenuItem>
            </List>
          </Box>
        </Drawer>
        <SPACLogo src={SPAC} alt='SPAC logo' onClick={() => scrollToTop()}/>
        <IEEELogo src={IEEE} alt='IEEE logo'/>
      </NavBar>
    </AppBar>
  );
}
