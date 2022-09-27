import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavbarContainer = styled.div`
  background: ${({scrollNav}) => (scrollNav ? '#0f0f0f' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 11;
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
`;

export const NavbarLogo = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  margin-left: 20px;

  img {
    height: 50px;
  }
`;

export const NavbarLinksContainer = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  margin-right: -22px; 

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  height: 80px;
  /* margin: 0 20px; */
`;

export const NavbarLink = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 900;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &.active {
    color: #FFC000;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #FFC000;
  }
`;

export const NavbarButton = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavbarToogle = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white
  }
`;