import React from 'react'
import Countdown from '../../components/Countdown'
import { BackToMenuIcon, SectionDescription, SectionTittle } from '../../components/SharedElements'
import { PicContainer } from './PicElements'
import { MdKeyboardBackspace } from 'react-icons/md'; 

const Pic = () => {
  return (
    <PicContainer>
      <BackToMenuIcon to="/">
        <span><MdKeyboardBackspace /></span>
      </BackToMenuIcon>
      <SectionTittle>
        La Perm du Pic
      </SectionTittle>
      <SectionDescription>
        Rejoingnez-nous lundi 29 novembre à 18h30 au Pic'Assos de l'UTC pour la perm du BDB.
      </SectionDescription>
      <Countdown date={`2021-11-29T18:30:00+01:00`} />
    </PicContainer>
  )
}

export default Pic
