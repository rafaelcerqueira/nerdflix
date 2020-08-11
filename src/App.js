import React from 'react';
import { HeaderNerdflix, Wrapper } from './components/HeaderNerflix';
import LogoNerdflix from './components/LogoNerdflix';
import ButtonNerdflix from './components/ButtonNerdflix';
import FooterNerdflix from './components/FooterNerdflix';
import LogoImersao from './components/LogoImersao';
import BannerNerdflix from './components/BannerNerdflix';
import TagNerdflix from './components/TagNerdflix';
import TitleNerdflix from './components/TitleNerdflix';
import DescriptionNerdflix from './components/DescriptionNerdflix';
import ThumbNerdflix from './components/ThumbNerdflix';
import ConhecaAlura from '../src/assets/img/ConhecaAlura.png';

// JSX = JavaScript XML
function App() {
  return (
    <>
      <HeaderNerdflix >
        <Wrapper>
          <LogoNerdflix />

          <ButtonNerdflix>Novo Vídeo</ButtonNerdflix>
        </Wrapper>
      </ HeaderNerdflix>

      <BannerNerdflix>
        <TagNerdflix>Tech</TagNerdflix>
        <TitleNerdflix>Conheça o canal da Alura!</TitleNerdflix>
        <DescriptionNerdflix>
          Acompanhe conteúdos de Tecnologia, Design e Negócios digitais tanto em aulas curtas e práticas, quanto em webséries, como o Hipsters Ponto Tube. Conheça a Alura: <a href="https://www.alura.com.br/">alura.com.br</a>
        </DescriptionNerdflix>

        <ThumbNerdflix src={ConhecaAlura} alt="Thumb do Conheça a Alura"/>
      </BannerNerdflix>

      <FooterNerdflix>

        <LogoNerdflix />
        <p>Site feito na <a href="https://alura.com.br"><LogoImersao /></a></p>
      </FooterNerdflix>
    </>
  );
}

export default App;
