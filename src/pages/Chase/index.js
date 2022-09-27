import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BackToMenuIcon, ButtonJoin, ButtonWrapper, SectionDescription, SectionTittle } from '../../components/SharedElements'
import { ChaseContainer } from './ChaseElements'
import Countdown from '../../components/Countdown';
import { MdKeyboardBackspace } from 'react-icons/md';
import { FaqContainer, FaqDescription, AccordionHeader, AccordionContent, AccordionItem } from './FaqElements'
import { FaqData } from './Data';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';
import '@brainhubeu/react-carousel/lib/style.css';
import { CreationContainer, CreationDescription, CarouselContainer, ImgWrapper, CarouselArrow, CarouselLegend, CreationWrapper, CreationCard, CardTop } from './ChaseElements';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import { ChaseDataCarroussel } from './Data';
import Carousel, { autoplayPlugin, slidesToShowPlugin, slidesToScrollPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
const Chase = () => {

  const [sucess, setsucess] = useState(0);
  const [clicked, setClick] = useState(false);

  const toogle = (index) => {
    if (clicked === index) {
      return setClick(null)
    }
    setClick(index);
  }


  return (
    <ChaseContainer>
      <BackToMenuIcon to="/">
        <span><MdKeyboardBackspace /></span>
      </BackToMenuIcon>
      <SectionTittle>
        La Ruée vers l'Orge
      </SectionTittle>
      <SectionDescription>
        Soyez prêt pour la ruée vers l'orge. Début de l'evenement lundi 29 novembre
      </SectionDescription>
      <Countdown date={`2021-11-29T18:30:00+01:00`} />
      <ButtonWrapper>
        <ButtonJoin href="http://bureaudesbrasseurs.com:5000/testword">
          Réponse
        </ButtonJoin>
      </ButtonWrapper>
      <FaqContainer id="faq">
      <IconContext.Provider value={{ color: '#4D2713', size: '40px' }}>
        <SectionTittle>F.A.Q</SectionTittle>
        <SectionDescription>
          Des questions ? Voici une liste des questions fréquement posées. Si vous avez d'autre questions qui ne sont pas répertoriées ici, n'hesitez pas à nous contacter
          par mail à <a href="mailto:bdb@assos.utc.fr">bdb@assos.utc.fr</a> ou sur notre page <a href="https://www.facebook.com/groups/170477866300245/user/100027654774445" target="_blank">Facebook</a>
        </SectionDescription>
        <AccordionItem>
          {FaqData.map((item, index) => {
            return (
              <>
                <AccordionHeader onClick={() => toogle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{(clicked === index ? <FiMinus /> : <FiPlus />)}</span>
                </AccordionHeader>
                <AccordionContent show={clicked === index}>
                  <p>{item.answer}</p>
                </AccordionContent>
              </>
            )
          })}
        </AccordionItem>
      </IconContext.Provider>

    </FaqContainer>


    <CarouselContainer>
        <Carousel
          plugins={[
            'infinite',
            'clickToChange',
            'centered',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 5000,
              },
            },
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3
              }
            },
            {
              resolve: slidesToScrollPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <CarouselArrow><FaArrowAltCircleLeft /></CarouselArrow>,
                arrowRight: <CarouselArrow><FaArrowAltCircleRight /></CarouselArrow>,
                addArrowClickHandler: true,
              }
            }
          ]}
          breakpoints={{
            1400: {
              plugins: [
                'infinite',
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 5000,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2
                  }
                },
                {
                  resolve: slidesToScrollPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: <CarouselArrow><FaArrowAltCircleLeft /></CarouselArrow>,
                    arrowRight: <CarouselArrow><FaArrowAltCircleRight /></CarouselArrow>,
                    addArrowClickHandler: true,
                  }
                }
              ]
            },
            1000: {
              plugins: [
                'infinite',
                'centered',
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 5000,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1
                  }
                },
                {
                  resolve: slidesToScrollPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: <CarouselArrow><FaArrowAltCircleLeft /></CarouselArrow>,
                    arrowRight: <CarouselArrow><FaArrowAltCircleRight /></CarouselArrow>,
                    addArrowClickHandler: true,
                  }
                }
              ]
            },
            600: {
              plugins: [
                'infinite',
                'centered',
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 5000,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1
                  }
                },
                {
                  resolve: slidesToScrollPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ]
            },
          }}
          animationSpeed={1000}
        >
          {ChaseDataCarroussel.map((creation, index) => {
            return (
              <CreationCard to="/" target="_blank">
                <CardTop><img src={creation.img} /></CardTop>
                <h2>{creation.topline}</h2>
                <h3>{creation.headline}</h3>
                <p>{creation.desc}</p>
                <p>{creation.desc2}</p>
                <p>{creation.desc3}</p>
              </CreationCard>
            )
          })}
        </Carousel>
        <CarouselLegend>Swipez pour voir nos créations</CarouselLegend>
      </CarouselContainer>
    </ChaseContainer>
  )
}

export default Chase