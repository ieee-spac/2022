import {useState} from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {appBarHeight, scrollOffsetMobile, theme} from "../util";
import List from "@mui/material/List";
import {scroller} from "react-scroll";

export default function MobileNav() {
  const [showDrawer, setShowDrawer] = useState(false);

  function scrollTo(elName) {
    scroller.scrollTo(elName, {
      smooth: true,
      offset: scrollOffsetMobile
    });
    setShowDrawer(false);
  }

  return (
    <AppBar sx={{zIndex: theme.zIndex.drawer + 1}}>
      <Toolbar /*style used for higher specificity*/ style={{minHeight: appBarHeight, height: appBarHeight}}>
        <IconButton onClick={() => setShowDrawer(!showDrawer)} color="inherit" aria-label="open drawer">
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
                <ListItemIcon>
                  <MenuIcon/>
                </ListItemIcon>
                <ListItemText secondary={'About'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('register')}>
                <ListItemIcon>
                  <MenuIcon/>
                </ListItemIcon>
                <ListItemText secondary={'Register'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('schedule')}>
                <ListItemIcon>
                  <MenuIcon/>
                </ListItemIcon>
                <ListItemText secondary={'Schedule'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('patronage')}>
                <ListItemIcon>
                  <MenuIcon/>
                </ListItemIcon>
                <ListItemText secondary={'Patronage'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('gallery')}>
                <ListItemIcon>
                  <MenuIcon/>
                </ListItemIcon>
                <ListItemText secondary={'Gallery'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('faq')}>
                <ListItemIcon>
                  <MenuIcon/>
                </ListItemIcon>
                <ListItemText secondary={'FAQ'}/>
              </ListItem>
              <ListItem button onClick={() => scrollTo('contact')}>
                <ListItemIcon>
                  <MenuIcon/>
                </ListItemIcon>
                <ListItemText secondary={'Contact Us'}/>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Typography>SPAC 2022</Typography>
      </Toolbar>
    </AppBar>
  );
}