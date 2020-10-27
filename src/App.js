import React from 'react';
import { HeaderNerdflix, Wrapper } from './components/HeaderNerflix';
import LogoNerdflix from './components/LogoNerdflix';
import ButtonNerdflix from './components/ButtonNerdflix';
import FooterNerdflix from './components/FooterNerdflix';
import LogoImersao from './components/LogoImersao';
import { BannerNerdflix, Text } from './components/BannerNerdflix';
import TagNerdflix from './components/TagNerdflix';
import TitleNerdflix from './components/TitleNerdflix';
import DescriptionNerdflix from './components/DescriptionNerdflix';
import ThumbNerdflix from './components/ThumbNerdflix';
import ConhecaAlura from '../src/assets/img/ConhecaAlura.png';
import AluraAvatar from './assets/img/AluraLogo.png'
import SectionNerdflix from './components/SectionNerdflix';

const videos = [
  {
    scr: { ConhecaAlura },
    alt: 'Bem-vindo ao Nerdflix',
    title: 'Bem-vindo ao Nerdflix',
    avatar: { AluraAvatar },
    channelName: 'alura',
    timer: '00:01:00',
    link: 'https://youtube.com/alura',
  },
  {
    scr: { ConhecaAlura },
    alt: 'Bem-vindo ao Nerdflix',
    title: 'Bem-vindo ao Nerdflix',
    avatar: { AluraAvatar },
    channelName: 'alura',
    timer: '00:01:00',
    link: 'https://youtube.com/alura',
  },
  {
    scr: { ConhecaAlura },
    alt: 'Bem-vindo ao Nerdflix',
    title: 'Bem-vindo ao Nerdflix',
    avatar: { AluraAvatar },
    channelName: 'alura',
    timer: '00:01:00',
    link: 'https://youtube.com/alura',
  },
  {
    scr: { ConhecaAlura },
    alt: 'Bem-vindo ao Nerdflix',
    title: 'Bem-vindo ao Nerdflix',
    avatar: { AluraAvatar },
    channelName: 'alura',
    timer: '00:01:00',
    link: 'https://youtube.com/alura',
  },
];

// JSX = JavaScript XML
function App() {
  return (
    <>
      <HeaderNerdflix >
        <Wrapper>
          <a href="https://nerdflix.com.br"><LogoNerdflix /></a>

          <ButtonNerdflix>Entrar</ButtonNerdflix>
        </Wrapper>
      </ HeaderNerdflix>

      <BannerNerdflix>
        <Text>
          <TagNerdflix>Tecnologia</TagNerdflix>
          <TitleNerdflix>Conheça o canal da Alura!</TitleNerdflix>
          <DescriptionNerdflix>
            Acompanhe conteúdos de Tecnologia, Design e Negócios digitais tanto em aulas curtas e práticas, quanto em webséries, como o Hipsters Ponto Tube. Conheça a Alura: <a href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer">alura.com.br</a>.
          </DescriptionNerdflix>
        </Text>

        <ThumbNerdflix 
        src={ConhecaAlura} 
        alt="Thumb do Conheça a Alura"
        title="Conheça o canal da Alura!"
        avatar={AluraAvatar}
        channelName="Alura"
        />
      </BannerNerdflix>

      <SectionNerdflix>
        <TagNerdflix>Programação e Desenvolvimento</TagNerdflix>
        <DescriptionNerdflix>
          Conteúdos incríveis no YouTube sobre programação. Aprenda a programar, fique por dentro do mercado, saiba dicas dos Devs e muito mais.
          </DescriptionNerdflix>
          <TagNerdflix small>Alura</TagNerdflix>
          {/*<CarouselNerdflix videos={videos} />*/}
      </SectionNerdflix>

      <FooterNerdflix>

        <LogoNerdflix />
        <p>Site feito na <a href="https://alura.com.br" target="_blank" rel="noopener noreferrer"><LogoImersao /></a></p>
      </FooterNerdflix>
    </>
  );
}

export default App;
