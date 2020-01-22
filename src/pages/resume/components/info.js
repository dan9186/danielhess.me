import React from 'react'
import styled from 'styled-components'

import { faUserTie } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './icon'
import { Section } from './section'
import { Subtitle } from './subtitle'

export const Info = ({ info }) => (
  <Section>
    <Subtitle>
      <Icon icon={faUserTie} />
      Info
    </Subtitle>
    <Content>
      <Item>
        <Pill>Status</Pill> {info.status}
      </Item>
      <Item>
        <Pill>Location</Pill> {info.location}
      </Item>
      <Item>
        <Pill>Remote</Pill> {info.remote}
      </Item>
    </Content>
  </Section>
)

const Content = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(2)};
`

const Item = styled.div`
  margin-top: ${props => props.theme.spacing(1)};

  &:first-child {
    margin-top: ${props => props.theme.spacing(0)};
  }
`

const Pill = styled.span`
  max-width: fit-content;
  border: 1px solid #78cc6d;
  ${props => props.theme.borderRadius.all}
  margin-right: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(0.5)};
  padding-left: ${props => props.theme.spacing(0.5)};

  color: #78cc6d;
  font-size: 14px;
  font-weight: 500;
`
