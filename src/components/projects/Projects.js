import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import sudokuImg from '../../asset/SudokuBreakerIcon.svg';
import NewCard from './NewCard';
function Projects({ projectRef }) {
  return (
    <Container ref={projectRef}>
      <Title>alcuni dei miei lavori</Title>
      {/* <Card
        category="coding"
        name="SuokuBreaker"
        description="Una simpatica WebApp che permette di risolvere istantaneamente tutti i sudoku"
        link="https://borinsimone.github.io/sudokubreaker/"
        preview={sudokuImg}
      />
      <Card
        category="coding"
        name="WoWChat"
        description="Una WebApp di messaggistica, creata con ReactJS e Firebase database"
      />
      <Card
      category="design"
      name="HiHome"
      description="Design per una applicazione per la gestione domotica"
    />
  */}
      <Header>Sfoglia e prova alcuni dei progetti a cui ho lavorato</Header>
      <div className='cardContainer'>
        <NewCard
          category='coding'
          name='SuokuBreaker'
          description='Una simpatica WebApp che permette di risolvere istantaneamente tutti i sudoku'
          link='https://borinsimone.github.io/sudokubreaker/'
          preview={sudokuImg}
        />

        <NewCard
          category='coding'
          name='WoWChat'
          description='Una WebApp di messaggistica, creata con ReactJS e Firebase database'
        />
        <NewCard
          category='design'
          name='HiHome'
          description='Design per una applicazione per la gestione domotica'
        />
      </div>

      <LoadMoreBtn>
        <BtnText>load more</BtnText>
      </LoadMoreBtn>
    </Container>
  );
}

export default Projects;
const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 10px;
  background-color: #141518;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;*/
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;
const Title = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  background: -webkit-linear-gradient(
    120deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const LoadMoreBtn = styled.div`
  background-color: #21242a;
  padding: 12px 24px;
  border-radius: 10px;
`;
const BtnText = styled.div`
  text-transform: uppercase;
  background: -webkit-linear-gradient(
    120deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  letter-spacing: 1px;
`;
const Header = styled.div`
  background: -webkit-linear-gradient(
    120deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  width: 80%;
  text-align: center;
  font-size: 2rem;
  padding: 20px;
  border-radius: 10px;
`;
