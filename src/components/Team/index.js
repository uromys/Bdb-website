import React, { useEffect } from 'react';
import { Button, ButtonJoin, ButtonWrapper, SectionDescription, SectionTittle } from '../SharedElements';
import { TeamContainer, TeamWrapper, TeamCard, TeamIcon } from './TeamElements';
import { TeamData } from './Data';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <TeamContainer id="team">
      <SectionTittle>L'équipe</SectionTittle>
      <SectionDescription>
        Depuis la création de l’association, de nombreux étudiants ont fait part de leur motivation et de leur volonté pour faire partie de l’aventure BDB. C’est donc en tenant compte de l’engouement autour du projet et par rapport aux demandes des utcéens que nous avons recruté 31 membres. Pour assurer le fonctionnement de l’association et le développement des projets, nous avons décidé de répartir les membres en 6 teams différentes : le bureau, la team brassage, la team logistique, la team event, la team développement durable, ainsi que la team communication. Voici la répartition des membres dans chaque équipe :
      </SectionDescription>
      <TeamWrapper>
        {TeamData.map((teamMember, index) => {
          return (
            <>
              <TeamCard data-aos="fade-up">
                <TeamIcon src={teamMember.img}></TeamIcon>
                <h2>{teamMember.pseudo}</h2>
                <h3>{teamMember.role}</h3>
                <p>{teamMember.desc}</p>
              </TeamCard>
            </>
          )
        })}
      </TeamWrapper>
      <ButtonWrapper>
        <ButtonJoin href="mailto:bdb@assos.utc.fr">
          Rejoignez-nous
        </ButtonJoin>
      </ButtonWrapper>
    </TeamContainer>
  )
}

export default Team