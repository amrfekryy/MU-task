import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import App from './App';

import { Provider } from 'react-redux'
import store from 'redux/store'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import controls from 'styles/_controls.scss'

const THEME = createMuiTheme({
  typography: {
   "fontFamily": controls['main-font'],
   "fontSize": controls['main-font-size'],
  }
});


ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <Provider store={store}> <App /> </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
