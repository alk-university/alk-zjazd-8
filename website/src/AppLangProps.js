import React, { useState } from 'react';

const dictionary = {
  pl: {
    headerText: 'Tresc naglowka',
    mainText: 'Tresc glowna',
    footerText: 'Tresc w stopce',
  },
  en: {
    headerText: 'Header text',
    mainText: 'Main content',
    footerText: 'Footer text',
  },
};

const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const Section = (props) => {
  return <h4>{props.text}</h4>;
};

const Footer = (props) => {
  return <h5>{props.text}</h5>;
};

const Page = (props) => {
  return (
    <>
      <Header text={props.headerText} />
      <Section text={props.mainText} />
      <Footer text={props.footerText} />
    </>
  );
};

const App = () => {
  const [lang, setLang] = useState('en');

  return (
    <section>
      <div>
        <span onClick={() => setLang('en')}>en</span> |{' '}
        <span onClick={() => setLang('pl')}>pl</span>
      </div>
      <Page
        headerText={dictionary[lang].headerText}
        mainText={dictionary[lang].mainText}
        footerText={dictionary[lang].footerText}
      />
    </section>
  );
};

export default App;
