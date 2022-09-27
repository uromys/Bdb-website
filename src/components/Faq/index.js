import React, { useState } from 'react';
import { FaqContainer, FaqDescription, AccordionHeader, AccordionContent, AccordionItem } from './FaqElements'
import { SectionDescription, SectionTittle } from '../SharedElements'
import { FaqData } from './Data';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';

const Faq = () => {
  const [clicked, setClick] = useState(false);

  const toogle = (index) => {
    if (clicked === index) {
      return setClick(null)
    }
    setClick(index);
  }
  return (
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
  )
}

export default Faq
