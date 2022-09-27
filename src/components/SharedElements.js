import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const SectionTittle = styled.h1`
  font-size: 4.5rem;
  /* font-family: 'Aclonica', sans-serif; */
  font-weight: 900;
  color: #4D2713;
  margin-bottom: 64px;
  text-align: center;
  max-width: 90%;

  span {
    color: red;
  }

  @media screen and (max-width: 782px) {
    font-size: 3.5rem
  }

  @media screen and (max-width: 530px) {
    font-size: 2.5rem;
  }
`;

export const SectionDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #4D2713;
  margin-bottom: 50px;
  text-align: center;
  max-width: 70%;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 32px;
  }
  a {
    text-decoration: none;
    color: #FFC000;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #BF640A;
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  max-width: 90%;
`;

export const Button = styled(LinkR)`
  text-decoration: none;
  font-size: ${({small}) => (small ? '0.9rem' : '1.7rem')};
  font-weight: 900;
  color: #4D2713;
  padding: ${({small}) => (small ? '10px 22px' : '18px 50px')};
  border-radius: 10px;
  background: #FFC000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: white;
    transition: all 0.2s ease-in-out;
  }
`;

export const ButtonJoin = styled.a`
  text-decoration: none;
  font-size: ${({small}) => (small ? '0.9rem' : '1.7rem')};
  font-weight: 900;
  color: #4D2713;
  padding: ${({small}) => (small ? '10px 22px' : '18px 50px')};
  margin-bottom: 50px;
  border-radius: 10px;
  background: #FFC000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: white;
    transition: all 0.2s ease-in-out;
  }
`;

export const HrCustom = styled.hr`
  /* margin-top: 20px; */
  margin-bottom: 50px;
  width: 40%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 91, 121, 0), rgba(255, 91, 121, 0.75), rgba(255, 91, 121, 0));
`;

export const BackToMenuIcon = styled(LinkR)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: transparent;
  cursor: pointer;

  span {
    color: #BF640A;
    font-size: 3rem;
  }
`;