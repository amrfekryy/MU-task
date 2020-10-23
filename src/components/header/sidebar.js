import React from 'react';
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

import { useTranslation } from 'react-i18next'

export default function SidebarBtn(props) {
  const { anchor } = props

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

        <Sidebar {...{state, toggleDrawer, anchor}}/>

      </React.Fragment>
    </div>
  );
}

function Sidebar (props) {
  const { state, toggleDrawer, anchor } = props
  const { t } = useTranslation()

  const listItems = [
    {label: 'Admission Officer', icon: [<ArrowForwardIosIcon />, <AccountCircle />]},
    {divider: true},
    {label: 'Applicants', icon: <Group />},
    {label: 'Dates', icon: <EventNote />},
    {label: 'Sign Out', icon: <ExitToApp />},
  ]

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
    >
      <div
        style={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {listItems.map((item, key) => {
            return item.divider 
            ? <Divider key={key+1} style={{margin: '8px 0'}} /> 
            : <ListItem button key={key+1}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={t(item.label)} />
              </ListItem>
          })}
        </List>
      </div>
    </SwipeableDrawer>
  )
}
