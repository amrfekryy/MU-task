import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from 'assets/logo.png'

import SidebarBtn from './sidebar'
import LangBtns from './lang'


export default function Header() {

  return (
      <AppBar className='header' position="static" color="#fff">
        <Toolbar 
          variant="dense" 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
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
