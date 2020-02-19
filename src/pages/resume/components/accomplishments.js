import React from 'react'
import styled from 'styled-components'

import { faAward } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './icon'
import { Section } from './section'
import { Subtitle } from './subtitle'

export const Accomplishments = ({ accomplishments = [] }) => (
  <Section>
    <Subtitle>
      <Icon icon={faAward} />
      Accomplishments
    </Subtitle>
    <Content>
      {accomplishments.map(a => (
        <li>{a}</li>
      ))}
    </Content>
  </Section>
)

const Content = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(0)};
  margin-left: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme }) => theme.spacing(2)};

  font-size: 16px;
  font-weight: 500;
`
