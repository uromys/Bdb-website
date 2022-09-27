import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  /* background: linear-gradient(0deg, #4D2713 80%, RGBA(255,247,200,1) 100%); */
  background: #4D2713;
`;

export const FooterWrap = styled.div`
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: white;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTittle = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #FF5B79;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  transition : 0.2s ease-in-out;

  span {
    color: white;
    padding-right: 25px;
  }

  &:hover {
    color : white;
    transition : 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: white; 
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: 'Aclonica', sans-serif;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }

  img {
    width: 100px;
  }
`;

export const WebsiteRights = styled.small`
  color: white;

  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  
  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }`;

export const SocialIconLink = styled.a`
  color: white;
  transition : 0.2s ease-in-out;
  font-size: 3rem;

  &:hover {
    color: #FFC000;
    transition : 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;