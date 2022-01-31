import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import infos from './db.json';

export default function CardsPage() {
  const { card } = useParams();
  const [thisCard, setThisCard] = useState();
  console.log(card);
  console.log(thisCard);

  useEffect(
    () => {
      setThisCard(infos.filter((i) => i.name?.includes(card))[0]);
    }, // eslint-disable-next-line
    []
  );

  return (
    <Container>
      <Header>
        <h1>{thisCard?.name}</h1>
      </Header>
      <Card>
        {thisCard?.abv ? (
          <InfoBox>
            <p>ABV:</p>
            <h1>{thisCard?.abv}</h1>
          </InfoBox>
        ) : (
          ''
        )}
        {thisCard?.address ? (
          <InfoBox>
            <p>Address:</p>
            <h1>{thisCard?.address}</h1>
          </InfoBox>
        ) : (
          ''
        )}
        {thisCard?.category ? (
          <InfoBox>
            <p>Category:</p>
            <h1>{thisCard?.category}</h1>
          </InfoBox>
        ) : (
          ''
        )}
        {thisCard?.city ? (
          <InfoBox>
            <p>City:</p>
            <h1>{thisCard?.city}</h1>
          </InfoBox>
        ) : (
          ''
        )}
        {thisCard?.coordinates ? (
          <InfoBox>
            <p>Coordinates:</p>
            {thisCard?.coordinates?.map((j) => (
              <h1>{j}</h1>
            ))}
          </InfoBox>
        ) : (
          ''
        )}
        {thisCard?.country ? (
          <InfoBox>
            <p>Country:</p>
            <h1>{thisCard?.country}</h1>
          </InfoBox>
        ) : (
          ''
        )}
        {thisCard?.description ? (
          <InfoBox>
            <p>Description:</p>
            <h1>{thisCard?.description}</h1>
          </InfoBox>
        ) : (
          ''
        )}
        {thisCard?.ibu ? (
          <InfoBox>
            <p>IBU:</p>
            <h1>{thisCard?.ibu}</h1>
          </InfoBox>
        ) : (
          ''
        )}
        {thisCard?.name ? (
          <InfoBox>
            <p>Name:</p>
            <h1>{thisCard?.name}</h1>
          </InfoBox>
        ) : (
          ''
        )}
        {thisCard?.state ? (
          <InfoBox>
            <p>State:</p>
            <h1>{thisCard?.state}</h1>
          </InfoBox>
        ) : (
          ''
        )}
        {thisCard?.website ? (
          <InfoBox>
            <p>Website:</p>
            <a href={thisCard?.website}>
              <h1>{thisCard?.website}</h1>
            </a>
          </InfoBox>
        ) : (
          ''
        )}
      </Card>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background: rgb(247, 53, 119);
  background: rgb(247, 53, 119);
  background: rgb(247, 53, 119);
  background: linear-gradient(
    90deg,
    rgba(247, 53, 119, 0.2553396358543417) 12%,
    rgba(1, 174, 165, 0.26094187675070024) 24%,
    rgba(83, 45, 129, 0.2553396358543417) 35%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background: rgba(83, 45, 129, 0.2553396358543417);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 35px;
  }
`;

const Card = styled.div`
  height: 700px;
  width: 600px;
  background: rgba(247, 53, 119, 0.6250875350140056);
  border-radius: 8px;
  padding: 15px;
`;

const InfoBox = styled.div`
  height: auto;
  width: 100%;
  margin: 5px 0;
  padding: 5px;

  p {
    margin: 5px 0;
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
  }

  h1 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
  }
`;
