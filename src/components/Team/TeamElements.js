import styled from "styled-components";

export const TeamContainer = styled.div`
  background: #FFF7C8;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const TeamDescription = styled.h2`
  max-width: 70%;
  font-size: 1rem;
  /* max-width: 70%; */
  text-align: justify;

`;

export const TeamWrapper = styled.div`
  max-width: 1200px;
  align-items: flex-start;
  grid-gap: 50px;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const TeamCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-width: 300px;
  transition: all 0.2s ease-in-out;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 10px;
    color: #4D2713;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #4D2713;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    color: #4D2713;
  }
`;

export const TeamIcon = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
  border-radius: 50%;
  border-style: solid;
  border-color: rgba(77, 39, 19, 0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 50px 1px #4D2713;
  }  
`;

