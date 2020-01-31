import React from 'react'
import styled from 'styled-components'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './icon'
import { Section } from './section'
import { Subtitle } from './subtitle'
import { Position } from './position'

export const Positions = ({ positions = [] }) => {
  return (
    <Section>
      <Subtitle>
        <Icon icon={faBriefcase} />
        Positions
      </Subtitle>
      <Content>
        {positions.map(p => (
          <Position position={p} />
        ))}
      </Content>
    </Section>
  )
}

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(2)};
`
