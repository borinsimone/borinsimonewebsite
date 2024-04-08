import React from 'react';
import styled from 'styled-components';
import skillimg from '../../asset/Frame 45.png';
import pullupimg from '../../asset/Pullups.svg';
import { FaMountain, FaPaintBrush, FaPlane } from 'react-icons/fa';
import { FaMountainSun } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function About({ aboutRef }) {
  return (
    <Container ref={aboutRef}>
      <Section>
        <Title>chi sono</Title>
        <ImageContainer>
          <Photo />
          <Frame />
        </ImageContainer>
        <TextContainer>
          <Paragraph className='intro'>
            Sono Simone Borin, un Web Developer e Designer con una solida
            formazione ottenuta tramite l'università online di Start2Impact e
            numerosi corsi di specializzazione.
          </Paragraph>
          <Paragraph className='technic'>
            <span>Competenze Tecniche:</span>
            Le mie competenze spaziano dall'HTML5 avanzato al CSS3 e al
            framework ReactJS. Utilizzo queste tecnologie per creare esperienze
            web coinvolgenti e moderne.
          </Paragraph>
          <Paragraph className='creativity'>
            <span>Passione per il Disegno Creativo:</span>
            Al di là del coding, nutro una grande passione per il disegno
            creativo. Sono abile nell'utilizzo di strumenti come Photoshop,
            Illustrator, e Procreate per creare grafiche accattivanti e
            manipolare immagini.
          </Paragraph>
          <Paragraph className='design'>
            <span>Utilizzo di Strumenti di Design:</span>
            Sfrutto Figma per il design, un potente strumento di prototipazione,
            per creare interfacce utente intuitive e ben progettate.
          </Paragraph>
          <Paragraph className='outro'>
            <span>Sinergia tra Competenze Tecniche e Creatività:</span>
            Questa sinergia tra le mie competenze tecniche e la mia creatività
            nel design mi consente di realizzare progetti digitali di alta
            qualità che combinano estetica e funzionalità in modo armonioso.
          </Paragraph>
        </TextContainer>
      </Section>

      <Section>
        <Title>le mie skill</Title>
        <SkillGrid src={skillimg} />
      </Section>
      <Section>
        <Title>i miei interessi</Title>
        <InterestText>
          Scopri qualcosa in più su di me cliccando le icone qui sotto
        </InterestText>
        <InterestContainer>
          <InterestIconBorder
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <PaintIcon />
          </InterestIconBorder>
          <InterestIconBorder
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <PlaneIcon />
          </InterestIconBorder>
          <InterestIconBorder
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NatureIcon />
          </InterestIconBorder>
          <InterestIconBorder
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <WorkoutIcon src={pullupimg} />
          </InterestIconBorder>
        </InterestContainer>
      </Section>
    </Container>
  );
}

export default About;
const Container = styled.div`
  width: 100vw;
  height: fit-content;
  background-color: #21242a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  overflow: hidden;
  gap: 40px;
`;
const Title = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;

  background: -webkit-linear-gradient(
    120deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 60vw;
  aspect-ratio: 1;
  margin-bottom: 20px;
`;
const Photo = styled.div`
  background-color: #000;
  width: 60vw;
  aspect-ratio: 1;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
`;
const Frame = styled.div`
  width: 60vw;
  aspect-ratio: 1;
  border: 10px solid;
  position: absolute;
  top: 20px;
  right: -20px;
  border-image: linear-gradient(
      120deg,
      rgba(64, 180, 118, 1) 0%,
      rgba(44, 211, 201, 1) 100%
    )
    1;
  z-index: 0;
`;
const TextContainer = styled.div`
  width: 90%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'intro'
    'technic'
    'creativity'
    'design'
    'outro';

  .intro {
    grid-area: intro;
  }

  .technic {
    grid-area: technic;
  }

  .creativity {
    grid-area: creativity;
  }

  .design {
    grid-area: design;
  }

  .outro {
    grid-area: outro;
  }

  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px 20px;
    grid-auto-flow: row;
    grid-template-areas:
      'intro intro intro'
      'technic creativity design'
      'outro outro outro';

    .intro {
      grid-area: intro;
    }

    .technic {
      grid-area: technic;
    }

    .creativity {
      grid-area: creativity;
    }

    .design {
      grid-area: design;
    }

    .outro {
      grid-area: outro;
    }
  }
`;
const Paragraph = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: white;
  display: flex;
  flex-direction: column;
  span {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const SkillGrid = styled.img`
  /* width: 60vw; */
  @media (min-width: 700px) {
    width: 60vw;
  }
  @media (min-width: 1024px) {
    width: 40vw;
  }
`;
const InterestText = styled.div`
  color: white;
  opacity: 0.7;
`;
const PaintIcon = styled(FaPaintBrush)`
  color: #40b476;
  font-size: 50px;
`;
const PlaneIcon = styled(FaPlane)`
  color: #40b476;
  font-size: 50px;
`;
const NatureIcon = styled(FaMountainSun)`
  color: #40b476;
  font-size: 50px;
`;
const WorkoutIcon = styled.img`
  height: 60px;
`;
const InterestIconBorder = styled.div`
  border: 2px solid #40b476;
  /* padding: 25px; */
  border-radius: 50%;
  height: 80px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InterestContainer = styled.div`
  width: 60%;
  justify-content: center;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  @media (min-width: 700px) {
    flex-wrap: nowrap;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
