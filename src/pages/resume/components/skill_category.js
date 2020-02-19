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
  margin-right: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

const Title = styled.h3`
  display: flex;
  flex-flow: column;
  margin: ${({ theme }) => theme.spacing(0)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};

  color: ${({ theme }) => theme.palette.grey[300]};
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;

  &:after {
    margin-top: ${({ theme }) => theme.spacing(2)};
    content: '';
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.palette.grey[600]},
      ${({ theme }) => theme.palette.grey[850]}
    );
    height: 1px;
    width: 100%;
  }
`

const Entries = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-left: ${({ theme }) => theme.spacing(1)};
`
