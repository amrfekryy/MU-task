import React from 'react'
import { useTranslation } from 'react-i18next';

function LangBtn(props) {
  const { bg, text, lang } = props

  const { i18n } = useTranslation()

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    backgroundColor: bg,
    color: '#fff',
    fontWeight: 'bolder',
    fontSize: 'smaller',
    borderRadius: 3,
    margin: 5,
    cursor: 'pointer'
  }

  return <div style={style} 
    onClick={() => i18n.changeLanguage(lang)}
    > {text} </div>
}


export default function LangSection() {
  return (
    <div 
      // style={{ direction: 'rtl' }}
    >
      <div style={{ display: 'flex' }}>
        <LangBtn {...{bg: '#444', text: 'EN', lang: 'en'}} />
        <LangBtn {...{bg: '#0BA7BA', text: 'AR', lang: 'ar'}} />
      </div>
      <div style={{ margin: 2 }}>contactus@mcst.edu.sa</div>
    </div>
  );
}
