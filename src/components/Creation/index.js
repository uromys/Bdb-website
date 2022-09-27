import React from 'react';
import { SectionDescription, SectionTittle } from '../SharedElements';
import { CreationContainer, CreationDescription, CarouselContainer, ImgWrapper, CarouselArrow, CarouselLegend, CreationWrapper, CreationCard, CardTop } from './CreationElements';
import Carousel, { autoplayPlugin, slidesToShowPlugin, slidesToScrollPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { CreationData } from './Data';

const Creation = () => {
  return (
    <CreationContainer id="creation">
      <SectionTittle>Nos Créations</SectionTittle>
      <SectionDescription>
        Le bureau des brasseurs est fier de vous présentez ses dernières créations !
      </SectionDescription>
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
          {CreationData.map((creation, index) => {
            return (
              <CreationCard to="/" target="_blank">
                <CardTop><img src={creation.img} /></CardTop>
                <h2>{creation.topline}</h2>
                <h3>{creation.headline}</h3>
                <p>{creation.desc}</p>
              </CreationCard>
            )
          })}
        </Carousel>
        <CarouselLegend>Swipez pour voir nos créations</CarouselLegend>
      </CarouselContainer>
    </CreationContainer>
  )
}

export default Creation
