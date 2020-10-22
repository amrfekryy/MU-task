import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Group from '@material-ui/icons/Group';
import EventNote from '@material-ui/icons/EventNote';
import ExitToApp from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={1}>
          <ListItemIcon>
            <ArrowForwardIosIcon />
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={'Admission Male'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={2}>
          <ListItemIcon><Group /></ListItemIcon>
          <ListItemText primary={'Applicants'} />
        </ListItem>
        <ListItem button key={3}>
          <ListItemIcon><EventNote /></ListItemIcon>
          <ListItemText primary={'Dates'} />
        </ListItem>
        <ListItem button key={4}>
          <ListItemIcon><ExitToApp /></ListItemIcon>
          <ListItemText primary={'Sign Out'} />
        </ListItem>
      </List>
    </div>
  );

  const anchor = 'right'

  return (
    <div>
      <React.Fragment>
        
        <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(anchor, true)}
            color="inherit"
        >
          <AccountCircle />
        </IconButton>
      
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      
      </React.Fragment>
    </div>
  );
}
