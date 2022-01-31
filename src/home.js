import infos from './db.json';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Card from './card.js';
import { Link } from 'react-router-dom';

export default function Home() {
  const [searchCards, setSearchCards] = useState([]);
  const [nameTyped, setNameTyped] = useState([]);

  useEffect(() => {
    if (searchCards.length >= 3) {
      setNameTyped(infos.filter((i) => i.name?.includes(searchCards)));
    }
  }, [searchCards]);

  return (
    <Container>
      <SearchBar
        type='text'
        placeholder='Search by name'
        onChange={(e) => setSearchCards(e.target.value)}
      ></SearchBar>
      {searchCards.length >= 3 ? (
        <SearchedCardsBox>
          {nameTyped?.map((i) => (
            <Link to={`/cards-page/${i.name}`}>
              <SearchedCards>
                <h1>{i.name}</h1>
              </SearchedCards>
            </Link>
          ))}
        </SearchedCardsBox>
      ) : (
        ''
      )}
      <Card infos={infos} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: rgb(1, 174, 165);
  background: linear-gradient(
    90deg,
    rgba(1, 174, 165, 0.5) 0%,
    rgba(247, 53, 119, 0.5) 50%,
    rgba(83, 45, 129, 0.5) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
`;

const SearchBar = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 8px;
  border: none;
`;

const SearchedCardsBox = styled.div`
  width: 495px;
  height: auto;
  max-height: 400px;
  border-radius: 8px;
  background: #979fb5;
  padding: 8px;
  overflow: scroll;
`;

const SearchedCards = styled.div`
  height: 40px;
  margin: 3px auto;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 4px;
  cursor: pointer;

  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
  }

  :hover {
    background: #de99bd;
  }
`;
