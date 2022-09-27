import React from 'react'
import { CloseIcon, SidebarButtonWrap, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'
import { Button } from '../SharedElements';

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={props.toggle}>A propos</SidebarLink>
          <SidebarLink to="creation" onClick={props.toggle}>Nos création</SidebarLink>
          <SidebarLink to="event" onClick={props.toggle}>Nos événements</SidebarLink>
          <SidebarLink to="team" onClick={props.toggle}>L'équipe</SidebarLink>
          <SidebarLink to="faq" onClick={props.toggle}>F.A.Q.</SidebarLink>
        </SidebarMenu>
        <SidebarButtonWrap>
          <Button to="/beer-chase" aria-label="beer-chase">
            La ruée vers l'orge
          </Button>
        </SidebarButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
