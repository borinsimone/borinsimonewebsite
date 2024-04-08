import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

function Card({ category, preview, name, description, link }) {
  return (
    <Container>
      <Category>{category}</Category>
      <PreviewContainer>
        <Preview src={preview} />
      </PreviewContainer>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Btn
        as={motion.a}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={link}
        target='_blank'
      >
        prova!
      </Btn>
      <Line />
    </Container>
  );
}

export default Card;
const Container = styled.div`
  width: 80vw;
  max-width: 300px;
  /* min-height: 30svh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: white;
  @media (min-width: 700px) {
    width: 60vw;
    gap: 50px;
  }
`;
const Category = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  width: 100%;
  font-size: 1.8rem;
`;
const PreviewContainer = styled.div`
  width: 70%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: -webkit-linear-gradient(
    0deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 30px 5px white;
`;
const Preview = styled.img`
  height: 100%;
  /* -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px); */
`;
const Name = styled.div`
  font-size: 2rem;
`;
const Description = styled.div`
  text-align: center;
  letter-spacing: 1px;
  font-size: 1.4rem;
`;
const Btn = styled.a`
  color: #141518;
  text-transform: uppercase;
  font-weight: 900;
  padding: 8px 12px;
  border-radius: 5px;
  background: -webkit-linear-gradient(
    120deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
`;
const Line = styled.div`
  width: 100%;
  height: 4px;
  background: -webkit-linear-gradient(
    120deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
`;
