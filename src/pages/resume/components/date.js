import React from 'react'
import styled from 'styled-components'

export const Date = ({ start, end }) => {
  const active = end.toLowerCase() === 'present'

  return (
    <Container>
      <Pill active={active}>
        {start} - {end}
      </Pill>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const Pill = styled.div`
  max-width: fit-content;
  border: 1px solid ${props =>
    props.active
      ? props.theme.palette.green[400]
      : props.theme.palette.grey[500]};
  ${props => props.theme.borderRadius.all}
  margin-top: ${props => props.theme.spacing(1)};
  margin-right: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(0.5)};
  padding-left: ${props => props.theme.spacing(0.5)};

  color: ${props =>
    props.active
      ? props.theme.palette.green[400]
      : props.theme.palette.grey[500]};
  font-size: 13px;
  line-height: 1.4em;
`
