import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Content from './content'

export default function Body() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed 
        style={{ padding: '5vh 0'}}
        >
        <Content/>
      </Container>
    </React.Fragment>
  );
}
