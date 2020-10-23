import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from 'assets/logo.png'

import SidebarBtn from './sidebar'
import LangBtns from './lang'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
      <AppBar position="static" color="#fff">
        <Toolbar 
          variant="dense" 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            // padding: '5px'
          }}
        >
          
          <LangBtns />

          <img src={logo} alt="MU" style={{
            height: '40px',
            margin: '5px'
          }}/>

          <SidebarBtn anchor={'right'}/>          

        </Toolbar>
      </AppBar>
  );
}
