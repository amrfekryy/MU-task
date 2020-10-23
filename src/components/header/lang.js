import React from 'react'

function LangBtn(props) {
  const { bg, text } = props

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    lineHeight: 10,
    backgroundColor: bg,
    color: '#fff',
    fontWeight: 'bolder',
    fontSize: 'smaller',
    borderRadius: 3,
    margin: 5
  }

  return <div style={style}> {text} </div>
}


export default function LangSection() {
  return (
    <div 
      // style={{ direction: 'rtl' }}
    >
      <div style={{ display: 'flex' }}>
        <LangBtn {...{bg: '#444', text: 'EN'}} />
        <LangBtn {...{bg: '#0BA7BA', text: 'AR'}} />
      </div>
      <div style={{ margin: 2 }}>contactus@mcst.edu.sa</div>
    </div>
  );
}
