import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const EventContainer = styled.div`
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

export const EventWrapper = styled.div`
  max-width: 90vw;
  align-items: flex-start;
  grid-gap: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const EventCard = styled.div`
  background: #4D2713;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 10px rgba(77, 39, 19, 1);
  max-width: 330px;
  height: 650px;
  padding: 30px;
  margin: 0 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    margin: 20px 20px;
  }

  h2 {
    font-size: 1.7rem;
    color: white;
    text-transform: uppercase;
    text-align: center;
    /* padding: 20px; */
    margin-bottom: 40px;
  }

  h3 {
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 20px;
    color: white;
    text-align: center;
  }

  p {
    font-size: 1rem;
    text-align: center;
    color: white;
  }

  img {
    max-width: 130px;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 150px;

  img {
    /* height: 100%; */
    width: auto;
    transition: all 0.2s ease-in-out;
  }
`;