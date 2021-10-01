import {useState} from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  ListItem,
  ListItemText,
  Toolbar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {appBarHeight, scrollOffset, theme} from "../util";
import List from "@mui/material/List";
import {scroller} from "react-scroll";
import SPAC from "../assets/spaclogo.png";

export default function MobileNav() {
  const [showDrawer, setShowDrawer] = useState(false);

  function scrollTo(elName) {
    scroller.scrollTo(elName, {
      smooth: true,
      offset: scrollOffset
    });
    setShowDrawer(false);
  }

  return (
    <AppBar sx={{zIndex: theme.zIndex.drawer + 1}}>
      <Toolbar /*style used for higher specificity*/ style={{minHeight: appBarHeight, height: appBarHeight}}>
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
              <ListItem button onClick={() => scrollTo('about')}>
                <ListItemText secondaryTypographyProps={{fontWeight: 'bold'}} secondary={'About'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('register')}>
                <ListItemText secondaryTypographyProps={{fontWeight: 'bold'}} secondary={'Register'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('schedule')}>
                <ListItemText secondaryTypographyProps={{fontWeight: 'bold'}} secondary={'Schedule'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('patronage')}>
                <ListItemText secondaryTypographyProps={{fontWeight: 'bold'}} secondary={'Patronage'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('gallery')}>
                <ListItemText secondaryTypographyProps={{fontWeight: 'bold'}} secondary={'Gallery'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('faq')}>
                <ListItemText secondaryTypographyProps={{fontWeight: 'bold'}} secondary={'FAQ'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('contact')}>
                <ListItemText secondaryTypographyProps={{fontWeight: 'bold'}} secondary={'Contact Us'}/>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <img src={SPAC} alt='SPAC Logo' style={{width: '7em'}} onClick={() => window.scrollTo(0, 0)}/>
      </Toolbar>
    </AppBar>
  );
}