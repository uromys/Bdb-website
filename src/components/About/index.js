import React from 'react';
import { AboutContainer, AboutDescription, AboutImage, AboutWrapper, ImageWrap, Image, LogoCaption } from './AboutElements';
import { HrCustom, SectionDescription, SectionTittle } from '../SharedElements';
import logobdb from '../../images/logos/logo-bdb.png';

const About = () => {
  return (
    <AboutContainer id="about">
      <SectionTittle>Qui sommes-nous ?</SectionTittle>
      <SectionDescription>
        Le Bureau des Brasseurs (BDB) est une association de l’Université de Technologie de Compiègne qui a pour projet d’entretenir la vie étudiante des utcéens par le brassage et la dégustation de bières artisanales.
        L’objectif est de partager le savoir-faire de l’association et de ses membres au plus grand nombre, notamment en organisant des initiations de brassage ouvertes à tous. De plus, l’association souhaite organiser des séances de présentation et dégustation de bières artisanales au cours d’évènements variés.
      </SectionDescription>
        <AboutImage>
          <ImageWrap>
            <Image src={logobdb} />
          </ImageWrap>
          {/* <LogoCaption>Notre logo représente une fleur de houblon</LogoCaption> */}
        </AboutImage>
    </AboutContainer>
  )
}

export default About
