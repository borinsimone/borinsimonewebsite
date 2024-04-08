import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

function NewCard({ category, preview, name, description, link }) {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  return (
    <Container>
      <Category>{category}</Category>
      <CardImage
        src={preview}
        alt='cardImage'
      />
      <Name>{name}</Name>
      <Description
        onClick={() => {
          setDescriptionExpanded(!descriptionExpanded);
        }}
        expanded={descriptionExpanded}
      >
        <div className='utility'>{description}</div>
      </Description>
      <Btn
        as={motion.a}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={link}
        target='_blank'
      >
        prova!
      </Btn>
    </Container>
  );
}

export default NewCard;
const Container = styled.div`
  color: white;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 10px;
  &:after {
    content: '';
    position: absolute;
    inset: -5px; /* control the spread */
    transform: translate(10px, 8px); /* control the offsets */
    z-index: -1; /* place the element behind */
    background: -webkit-linear-gradient(
      120deg,
      rgba(64, 180, 118, 1) 0%,
      rgba(44, 211, 201, 1) 100%
    );
    filter: blur(10px); /* control the blur */
  }
  @media (min-width: 700px) {
    width: 40vw;
  }
`;
const CardImage = styled.img`
  height: 100px;
`;
const Name = styled.div`
  font-size: 2rem;
`;
const Description = styled.div`
  font-size: 1.4rem;
  opacity: 0.7;
  /* height: 1.6rem; */
  width: 100%;

  /* transition: grid-template-rows 300ms; */
  display: grid;

  grid-template-rows: 1.6rem;
  .utility {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  ${(props) =>
    props.expanded &&
    css`
      grid-template-rows: 1fr;
      .utility {
        text-overflow: unset;
        white-space: unset;
        overflow: unset;
      }
    `};
`;
const Languages = styled.div``;
const LangaugeIcon = styled.div``;
const Category = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  text-transform: capitalize;
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
  margin: 10px auto;
`;
