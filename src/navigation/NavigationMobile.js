import {useState} from "react";
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
import {appBarHeight, scrollOffset, theme} from "../util";
import List from "@mui/material/List";
import {Link} from "react-scroll";
import SPAC from "../assets/spaclogo.png";

const MobileMenuButton = styled(Link)(({theme}) => ({
  color: 'rgba(0, 0, 0, 0.6)',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.875rem',
  fontWeight: 700,
  width: '100%',
  height: '100%',
  padding: '14px 16px 14px 16px',
  //Yes, it is a class called active and not the active selector
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

export default function MobileNav() {
  const [showDrawer, setShowDrawer] = useState(false);

  function hideDrawer(elName) {
    setShowDrawer(false);
    window.location.hash = elName;
  }

  return (
    <AppBar sx={{zIndex: theme.zIndex.drawer + 1}}>
      <NavBar>
        <IconButton sx={{marginRight: '1rem'}} onClick={() => setShowDrawer(!showDrawer)} color="inherit"
                    aria-label="open drawer">
          <MenuIcon/>
        </IconButton>
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
                                  sx={{backgroundColor: 'rgb(180, 240, 255)'}}
                                  onClick={() => hideDrawer('register')}>Register</MobileMenuButton>
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
        <img src={SPAC} alt='SPAC Logo' style={{width: '7em'}} onClick={() => window.scrollTo(0, 0)}/>
      </NavBar>
    </AppBar>
  );
}