import React from 'react'
import styled from 'styled-components'

import { Date } from './date'

export const Position = ({ position }) => {
  console.log(position)
  return (
    <Container>
      <Date start={position.start} end={position.end} />
      <Title>{position.title}</Title>
      <Company>{position.company}</Company>
      <Location>{position.location}</Location>
      <Entries></Entries>
    </Container>
  )
}

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

const Entries = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-left: ${props => props.theme.spacing(1)};
`
