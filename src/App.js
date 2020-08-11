import React from 'react';
import HeaderNerdflix from './components/HeaderNerflix';
import LogoNerdflix from './components/LogoNerdflix';
import ButtonNerdflix from './components/ButtonNerdflix';
import FooterNerdflix from './components/FooterNerdflix';
import LogoImersao from './components/LogoImersao';
import BannerNerdflix from './components/BannerNerdflix';
import TagNerdflix from './components/TagNerdflix';

// JSX = JavaScript XML
function App() {
  return (
    <>
      <HeaderNerdflix >
          <LogoNerdflix />

          <ButtonNerdflix>Novo Vídeo</ButtonNerdflix>

      </ HeaderNerdflix>

      <BannerNerdflix>
        <TagNerdflix>FrontEnd</TagNerdflix>
      </BannerNerdflix>

      <FooterNerdflix>

        <LogoNerdflix />
        <p>Site feito na <a href="https://alura.com.br"><LogoImersao /></a></p>
      </FooterNerdflix>
    </>
  );
}

export default App;
