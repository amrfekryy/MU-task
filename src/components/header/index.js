import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Explicit from '@material-ui/icons/Explicit';
import logo from 'assets/logo.png'
import Sidebar from './sidebar'

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
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);


  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
      <AppBar position="static" color="#fff">
        <Toolbar 
          variant="dense" 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            // padding: '5px'
          }}>
          
          <div>

            <div>
              <IconButton 
                edge="start"
                color="inherit"
                >
                <Explicit />
              </IconButton>
              <IconButton 
                edge="start"
                color="inherit"
                >
                <Explicit />
              </IconButton>
            </div>
            <div>
              contactus@mcst.edu.sa
            </div>
            </div>

          <img src={logo} alt="MU" style={{
            height: '40px',
            margin: '5px'
          }}/>

          <Sidebar />          
        </Toolbar>
      </AppBar>
  );
}