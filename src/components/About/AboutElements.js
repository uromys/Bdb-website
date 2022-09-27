import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #FFF7C8;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 40px 0px 20px 0px;
  }
`;

export const AboutImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
`;

export const ImageWrap = styled.div`
  margin: 20px;
`;

export const Image = styled.img`
  max-height: 500px;

  @media screen and (max-width: 762px) {
    max-height: 200px;
  }
`;

export const LogoCaption = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #4D2713;
  text-align: center;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 32px;
  }
`