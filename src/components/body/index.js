import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Tabs from './tabs'

export default function Body() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed 
        style={{ padding: '5vh 0'}}
        >
        <Tabs/>
      </Container>
    </React.Fragment>
  );
}
