import React from 'react';
import HeaderNerdflix from './components/HeaderNerflix';
import LogoNerdflix from './components/LogoNerdflix';
import ButtonNerdflix from './components/ButtonNerdflix';
import FooterNerdflix from './components/FooterNerdflix';
import LinkNerdflix from './components/LinkNerdflix';
import HighLightNerdflix from './components/HighLightNerdflix';
import LogoImersao from './components/LogoImersao';

// JSX = JavaScript XML
function App() {
  return (
    <>
      <HeaderNerdflix >
          <LogoNerdflix />

          <ButtonNerdflix>Novo Vídeo</ButtonNerdflix>

      </ HeaderNerdflix>

      <FooterNerdflix>

        <LogoNerdflix />
        <p>Site feito na <a href="https://alura.com.br"><LogoImersao /></a></p>
      </FooterNerdflix>
    </>
  );
}

export default App;
