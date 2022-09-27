import styled from 'styled-components';

export const CountdownContainer = styled.div`
  /* margin: 10px auto; */
  margin-bottom: 50px;
  color: #4D2713;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Column = styled.div`
  display: inline-block;
  padding: 0 20px;
  
  @media screen and (max-width: 480px) {
    padding: 10px;
    }
`;

export const Element = styled.div`
  display: inline-block;
  /* margin: 0 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;

  strong {
    font-size: 50px;

    @media screen and (max-width: 480px) {
      font-size: 25px;
    }
  }
`;

export const TimeUnit = styled.span`
  color : #FFC000;
  font-size: 20px;
  @media screen and (max-width: 480px) {
      font-size: 10px;
    }
`;