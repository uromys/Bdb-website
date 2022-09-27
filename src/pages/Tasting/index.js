import React from 'react'
import Countdown from '../../components/Countdown'
import { BackToMenuIcon, ButtonJoin, ButtonWrapper, SectionDescription, SectionTittle } from '../../components/SharedElements'
import { DescriptionColumn, DescriptionItem, DescriptionWrapper, Icon, TastingDescription, TatsingContainer } from './TastingElements'
import { FaMapMarkerAlt, FaBeer } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { IoFastFoodOutline } from 'react-icons/io5';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdKeyboardBackspace } from 'react-icons/md'; 

const Tasting = () => {
  return (
    <TatsingContainer>
      <BackToMenuIcon to="/">
        <span><MdKeyboardBackspace /></span>
      </BackToMenuIcon>
      <SectionTittle>
        La dégustation de bières
      </SectionTittle>
      <SectionDescription>
        Rejoingnez-nous mercredi 1er novembre pour la dégustation de bières au crous
      </SectionDescription>
      <Countdown date={`2021-12-01T17:00:00+01:00`} />
      <TastingDescription>
        <h1>Programme de la dégustation</h1>
        <DescriptionWrapper>
          <DescriptionColumn>
            <DescriptionItem>
              <span><FaBeer /></span>5 bières artisanales
            </DescriptionItem>
            <DescriptionItem>
              <span><IoFastFoodOutline /></span>Des tapas à manger
            </DescriptionItem>
            <DescriptionItem>
              <span><BsFillCalendarDateFill /></span>Mercredi 1er décembre
            </DescriptionItem>
          </DescriptionColumn>
          <DescriptionColumn>
            <DescriptionItem>
              <span><BiTime /></span>17h - 18h20 & 18h30 - 19h50
            </DescriptionItem>
            <DescriptionItem>
              <span><FaMapMarkerAlt /></span>2ème étage du Crous
            </DescriptionItem>
            <DescriptionItem>
              <span><AiFillDollarCircle /></span>8€ (shotgun lundi 29 - 20h)
            </DescriptionItem>
          </DescriptionColumn>
        </DescriptionWrapper>
      </TastingDescription>
      <ButtonWrapper>
        <ButtonJoin href="https://assos.utc.fr/woolly/ventes/70" target="_blank">
          Reservez votre place
        </ButtonJoin>
      </ButtonWrapper>
    </TatsingContainer>
  )
}

export default Tasting