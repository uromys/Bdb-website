import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTittle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import logobdb from '../../images/logos/logo-bdb.png';


const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome} ><img src={logobdb} alt="logo"/></SocialLogo>
            <WebsiteRights>BDB © {new Date().getFullYear()} Tous droit réservés</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://instagram.com/bdb_utc/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
              <SocialIconLink href="https://www.facebook.com/groups/170477866300245/user/100027654774445" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
