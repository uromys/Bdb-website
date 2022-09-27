import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavbarContainer, NavbarButton, NavbarWrapper, NavbarLogo, NavbarLinksContainer, NavbarItem, NavbarLink, NavbarToogle } from './NavbarElements';
import logobdb from '../../images/logos/logo-bdb.png';
import { Button } from '../SharedElements';
import { FaBars } from 'react-icons/fa';

const Navbar = (props) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    }
    else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () =>
      window.removeEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <NavbarContainer scrollNav={scrollNav}>
      <NavbarWrapper>
        <NavbarLogo onClick={toggleHome} ><img src={logobdb} /></NavbarLogo>
        <NavbarLinksContainer>
          <NavbarItem><NavbarLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>A propos</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink to="creation" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Nos créations</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink to="event" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Nos événements</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}>L'équipe</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink to="faq" smooth={true} duration={500} spy={true} exact='true' offset={-80}>F.A.Q</NavbarLink></NavbarItem>
        </NavbarLinksContainer>
        <NavbarButton>
          <Button to="/beer-chase" small={true}>
            La ruée vers l'orge
          </Button>
        </NavbarButton>
        <NavbarToogle onClick={props.toggle}><FaBars /></NavbarToogle>
      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar
