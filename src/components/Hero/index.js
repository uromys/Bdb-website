import React from 'react';
import { HeroContainer, HeroBackground, ImageBackground, HeroContent, HeroTittle, HeroDescription } from './HeroElements';
import herowp from '../../images/beer-wp.jpg'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <ImageBackground src={herowp}/>
      </HeroBackground>
      <HeroContent>
        <HeroTittle>
          Bureau des Brasseurs
        </HeroTittle>
        <HeroDescription>
          Association des brasseurs de bières de l'UTC depuis 2020
        </HeroDescription>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
