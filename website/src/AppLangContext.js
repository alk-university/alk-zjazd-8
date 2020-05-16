import React, { createContext, useContext, useState } from 'react';

const dictionaries = {
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

const LangContext = createContext();

const Header = () => {
  const dictionary = useContext(LangContext);
  return (
    <>
      <h1>{dictionary.headerText}</h1>
      <Section />
    </>
  );
};

const Section = () => {
  const dictionary = useContext(LangContext);
  return <h4>{dictionary.mainText}</h4>;
};

const Footer = () => {
  const dictionary = useContext(LangContext);
  return <h5>{dictionary.footerText}</h5>;
};

const Page = () => {
  return (
    <>
      <Header />
      <Footer />
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
      <LangContext.Provider value={dictionaries[lang]}>
        <Page />
      </LangContext.Provider>
    </section>
  );
};

export default App;
