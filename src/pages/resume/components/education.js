import React from 'react'
import styled from 'styled-components'

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { Date } from './date'
import { Icon } from './icon'
import { Section } from './section'
import { Subtitle } from './subtitle'

export const Education = ({ education = [] }) => (
  <Section>
    <Subtitle>
      <Icon icon={faGraduationCap} />
      Education
    </Subtitle>
    <Content>
      {education.map(ed => (
        <School>
          <Date start={ed.start} end={ed.end} />
          <Name>{ed.school}</Name>
          <Location>{ed.location}</Location>
          <Degrees>
            {ed.degrees.map(d => (
              <li>{d}</li>
            ))}
          </Degrees>
        </School>
      ))}
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

const School = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 50%;
  margin-bottom: ${props => props.theme.spacing(3)};

  &:last-child {
    margin-bottom: ${props => props.theme.spacing(0)};
  }
`

const Name = styled.h3`
  margin-top: ${props => props.theme.spacing(1)};
  margin-bottom: ${props => props.theme.spacing(0)};

  color: ${props => props.theme.palette.grey[300]};
  font-size: 18px;
`

const Location = styled.div`
  margin-top: ${props => props.theme.spacing(1)};

  font-size: 13px;
`

const Degrees = styled.ul`
  margin-top: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(3)};

  font-size: 16px;
  font-weight: 500;
`
