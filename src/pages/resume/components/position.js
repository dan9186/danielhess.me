import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import { Date } from './date'

export const Position = ({ position }) => (
  <Container>
    <Date start={position.start} end={position.end} />
    <Title>{position.title}</Title>
    <Company>{position.company}</Company>
    <Location>{position.location}</Location>
    <Achievements>
      {position.achievements.map(a => (
        <Achievement>
          <Mark icon={faCircle} />
          {a}
        </Achievement>
      ))}
    </Achievements>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 47%;
  margin-right: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(2)};
`

const Title = styled.h3`
  margin-top: ${props => props.theme.spacing(1)};
  margin-bottom: ${props => props.theme.spacing(0)};

  color: ${props => props.theme.palette.grey[300]};
  font-size: 18px;
`

const Company = styled.div`
  color: ${props => props.theme.palette.grey[400]};
  font-size: 15px;
  font-weight: 500;
`

const Location = styled.div`
  margin-top: ${props => props.theme.spacing(1)};

  font-size: 13px;
`

const Achievements = styled.ul`
  display: flex;
  flex-flow: column;
  margin-top: ${props => props.theme.spacing(0.5)};
  margin-bottom: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(0)};
  list-style: none;
`

const Achievement = styled.li`
  display: flex;
  padding-top: ${props => props.theme.spacing(0.5)};
`

const Mark = styled(FontAwesomeIcon)`
  display: flex;
  padding-top: ${props => props.theme.spacing(0.9)};
  padding-right: ${props => props.theme.spacing(1)};

  color: ${props => props.theme.palette.green[400]};
  font-size: 8px;
`
