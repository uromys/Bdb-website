import styled from "styled-components";

export const FaqContainer = styled.div`
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

export const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
`;

export const AccordionHeader = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid #4D2713;

  h1 {
    padding: 2rem;
    font-size: 1.5rem;
    font-weight: 900;
    color: #4D2713;

    @media screen and (max-width: 480px ) {
      font-size: 1rem;
      padding: 1.5rem;
    }
  }

  span {
    margin-right: 1.5rem;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);

    @media screen and (max-width: 480px) {
      transform: none;
    }
  }
`;

export const AccordionContent = styled.div`
  background: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  overflow: hidden;
  transition: all 600ms ease-in-out;

  height: ${({ show }) => (show ? '150px' : '0')};
  opacity: ${({ show }) => (show ? '1' : '0')};

  @media screen and (max-width: 768px) {
    height: ${({ show }) => (show ? '210px' : '0')};
  }

  p {
    font-size: 1.2rem;
    font-weight: 700;
    width: 85%;
    color: #4D2713;

    @media screen and (max-width: 1100px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 782px) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;