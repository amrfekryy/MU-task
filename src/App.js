import React, { Suspense } from 'react'
import Header from 'components/header'
import Body from 'components/body'
import 'translation/i18n'

function App() {
  return (
    <>
      <Suspense fallback="loading">
        <Header />
        <Body />
      </Suspense>
    </>
  );
}

export default App;
