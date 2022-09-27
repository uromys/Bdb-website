import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,1) 100%),
    linear-gradient(180deg, rgba(0,0,0,1) 0%, transparent 50%);
    z-index: 2;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  /* position: absolute; */
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
`;

export const HeroTittle = styled.h1`
  font-size: 5rem;
  text-align: center;
  overflow: hidden;
  margin-top: 200px;
  margin-bottom: 50px;
`;

export const HeroDescription = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  overflow: hidden;
`;