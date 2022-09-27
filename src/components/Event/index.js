import React, { useEffect } from 'react';
import { Button, ButtonWrapper, SectionDescription, SectionTittle } from '../SharedElements';
import { CardTop, EventCard, EventContainer, EventDescription, EventWrapper } from './EventElements';
import { EventsData } from './Data';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Event = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <EventContainer id="event">
      <SectionTittle>Nos Evénements</SectionTittle>
      <SectionDescription>
        Le Bureau des Brasseurs organise de multiples événements pour faire vivre notre association mais aussi pour faire décrouvir le monde complexe et merveileux de la bière aux édudiants de l'UTC.
      </SectionDescription>
      <EventWrapper>
        {EventsData.map((event, index) => {
          return (
            <>
              <EventCard data-aos="fade-up">
                <CardTop><img src={event.img} /></CardTop>
                <h2>{event.topline}</h2>
                <h3>{event.headline}</h3>
                <p>{event.desc}</p>
                <ButtonWrapper>
                  <Button to={event.path} small={true}>
                    Plus de details
                  </Button>
                </ButtonWrapper>
              </EventCard>
            </>
          )
        })}
      </EventWrapper>
    </EventContainer>
  )
}

export default Event
