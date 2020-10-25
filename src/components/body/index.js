import React from 'react';
import Container from '@material-ui/core/Container';
import Tabs from './tabs'

export default function Body() {
  return (
    <React.Fragment>
      <Container fixed style={{ padding: '5vh 0'}}>
        <Tabs/>
      </Container>
    </React.Fragment>
  );
}
