import styled from "styled-components";

export const CreationContainer = styled.div`
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

export const CreationDescription = styled.h2`
  max-width: 70%;
  font-size: 1rem;
  /* max-width: 70%; */
  text-align: justify;
`;

export const CarouselContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  width: auto;
  height: 680px;
`;

export const ImgWrapper = styled.img`
  width: auto;
  height: 480px;
  /* border-radius: 30px; */
  /* border: 2px solid #FF5B79; */
  transform: scale(0.75);
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(0.8);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1050px) {
    width: auto;
    height: 300px;
  }
`;

export const CreationWrapper = styled.div`
  max-width: 330px;
  height: 650px;
  align-items: flex-start;
  grid-gap: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const CreationCard = styled.div`
  background: #4D2713;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 330px;
  height: 500px;
  padding: 30px 20px;
  margin: 0 20px;
  transition: all 0.2s ease-in-out;
  transform: scale(0.85);
  box-shadow: 0px 0px 20px 1px black;

  &:hover {
    transform: scale(0.9);
  }

  @media screen and (max-width: 768px) {
    margin: 20px 20px;
    height: 600px;
  }

  h2 {
    font-size: 1.7rem;
    color: white;
    text-transform: uppercase;
    text-align: center;
    /* padding: 20px; */
    margin-bottom: 20px;
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
  /* margin-bottom: 20px; */
  height: 150px;

  img {
    /* height: 100%; */
    width: auto;
    transition: all 0.2s ease-in-out;
  }
`;

export const CarouselArrow = styled.div`
  font-size: 3rem;
  padding: 0 10px;
  color: rgba(77, 39, 19, 0.5);
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const CarouselLegend = styled.p`
  color: #4D2713;
  font-size: 1.5rem;
  font-weight: 700;
  padding-top: 10px;
  display: none;
  text-align: center;

  @media screen and (max-width: 600px) {
    display: unset;
  }
`;