import React from "react";
import styled from "styled-components";
import skillimg from "../../asset/Frame 45.png";
import pullupimg from "../../asset/Pullups.svg";
import {
  FaMountain,
  FaPaintBrush,
  FaPlane,
} from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { motion } from "framer-motion";

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
          <Paragraph>
            Ciao! sono Simone Borin, Web Developer e
            Designer.
          </Paragraph>
          <Paragraph>
            La mia formazione deriva dall’universita online
            di Start2Impact più numerosi corsi.
          </Paragraph>
          <Paragraph>
            Le mie conoscenze comprendono: HTML5 avanzato,
            CSS3, ReactJS.
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
          Scopri qualcosa in più su di me cliccando le icone
          qui sotto
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
`;
const Paragraph = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: white;
`;

const SkillGrid = styled.img`
  /* width: 60vw; */
  @media (min-width: 700px) {
    width: 60vw;
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