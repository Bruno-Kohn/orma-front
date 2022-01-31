import styled from 'styled-components';

export default function Card({ infos }) {
  const infosSlice = infos.slice(0, 100);
  return infosSlice.map((i, index) => (
    <Box>
      <h2>Card #{index + 1}</h2>
      {i.abv ? (
        <InfoBox>
          <p>ABV:</p>
          <h1>{i.abv}</h1>
        </InfoBox>
      ) : (
        ''
      )}
      {i.address ? (
        <InfoBox>
          <p>Address:</p>
          <h1>{i.address}</h1>
        </InfoBox>
      ) : (
        ''
      )}
      {i.category ? (
        <InfoBox>
          <p>Category:</p>
          <h1>{i.category}</h1>
        </InfoBox>
      ) : (
        ''
      )}
      {i.city ? (
        <InfoBox>
          <p>City:</p>
          <h1>{i.city}</h1>
        </InfoBox>
      ) : (
        ''
      )}
      {i.coordinates ? (
        <InfoBox>
          <p>Coordinates:</p>
          {i.coordinates?.map((j) => (
            <h1>{j}</h1>
          ))}
        </InfoBox>
      ) : (
        ''
      )}
      {i.country ? (
        <InfoBox>
          <p>Country:</p>
          <h1>{i.country}</h1>
        </InfoBox>
      ) : (
        ''
      )}
      {i.description ? (
        <InfoBox>
          <p>Description:</p>
          <h1>{i.description}</h1>
        </InfoBox>
      ) : (
        ''
      )}
      {i.ibu ? (
        <InfoBox>
          <p>IBU:</p>
          <h1>{i.ibu}</h1>
        </InfoBox>
      ) : (
        ''
      )}
      {i.name ? (
        <InfoBox>
          <p>Name:</p>
          <h1>{i.name}</h1>
        </InfoBox>
      ) : (
        ''
      )}
      {i.state ? (
        <InfoBox>
          <p>State:</p>
          <h1>{i.state}</h1>
        </InfoBox>
      ) : (
        ''
      )}
      {i.website ? (
        <InfoBox>
          <p>Website:</p>
          <a href={i.website}>
            <h1>{i.website}</h1>
          </a>
        </InfoBox>
      ) : (
        ''
      )}
    </Box>
  ));
}

const Box = styled.div`
  height: auto;
  width: 550px;
  background: rgba(0, 174, 164, 0.3);
  border-radius: 10px;
  padding: 15px;
  margin: 15px;

  h2 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 22px;
    margin: 5px 0;
  }
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
