import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Sidebar from './sidebar'


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

