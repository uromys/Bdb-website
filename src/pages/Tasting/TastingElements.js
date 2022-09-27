import styled from "styled-components";

export const TatsingContainer = styled.div`
  background: #FFF7C8;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
`;

export const TastingDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #4D2713;
    padding-bottom: 20px;
    text-align: center;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
`;

export const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;

  @media screen and (max-width: 768px) {
    padding: 0px 50px;
  }
`;

export const DescriptionItem = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #4D2713;
  padding-bottom: 20px;

  span {
    color: #BF640A;
    padding-right: 25px;
    font-size: 1.5rem;
  }
`;