import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Section, Divider, SubHeading } from '../../../components/section/section'
import styled from 'styled-components'

export const Info = () => (
  <Section>
    <SubHeading>Info</SubHeading>
    <Divider />
    <InfoList>
      <InfoItem icon={faMapMarker} >Portland, OR</InfoItem>
      <InfoItem icon={faEnvelope} ><a href='mailto:daniel@danielhess.me' target='_blank'>daniel@danielhess.me</a></InfoItem>
      <InfoItem icon={faGithub} ><a href='https://github.com/dan9186' target='_blank'>github.com/dan9186</a></InfoItem>
      <InfoItem icon={faTwitter} ><a href='https://twitter.com/dan9186' target='_blank'>@dan9186</a></InfoItem>
    </InfoList>
  </Section>
)

const InfoItem = (props) => (
  <InfoItemContainer>
    <InfoIcon icon={props.icon} />
    {props.children}
  </InfoItemContainer>
)

const InfoList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  list-style:none;
    padding-left: 0;
`

const InfoItemContainer = styled.li`
  margin-bottom: 0.2em;

  &:last-child {
    margin-bottom: 0;
  }
`

const InfoIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
  color: #778492;
`
