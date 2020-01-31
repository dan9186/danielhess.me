import React from 'react'
import styled from 'styled-components'

import { Skill } from './skill'

export const SkillCategory = ({ title, entries }) => (
  <Container>
    <Title>{title}</Title>
    <Entries>
      {entries.map(({ name, level }) => (
        <Skill name={name} level={level} />
      ))}
    </Entries>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 47%;
  margin-right: ${props => props.theme.spacing(2)};
`

const Title = styled.h3`
  margin: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(1)};
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-top: ${props => props.theme.spacing(2)};

  color: ${props => props.theme.palette.grey[300]};
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;

  border-bottom: 1px solid ${props => props.theme.palette.grey[700]};
`

const Entries = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-left: ${props => props.theme.spacing(1)};
`
