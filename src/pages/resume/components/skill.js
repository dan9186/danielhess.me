import React from 'react'
import styled from 'styled-components'

export const Skill = ({ name, level }) => (
  <Container>
    <Name>{name}</Name>
    <Level level={level} />
  </Container>
)

const Level = ({ level = 0 }) => (
  <Marks>
    <Mark solid={level > 0} />
    <Mark solid={level > 1} />
    <Mark solid={level > 2} />
  </Marks>
)

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-right: ${props => props.theme.spacing(2)};
`

const Name = styled.h5`
  font-weight: 300;
  font-size: 14px;
  color: ${props => props.theme.palette.grey[500]};
  margin-top: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`

const Marks = styled.div`
  margin-top: ${props => props.theme.spacing(-1)};
`

const Mark = styled.span`
  background-color: ${props =>
    props.solid
      ? props.theme.palette.green[400]
      : props.theme.palette.grey[300]};
  display: inline-block;
  height: 2px;
  margin-right: ${props => props.theme.spacing(1)};
  width: ${props => props.theme.spacing(2)};
`
