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
  border: 1px solid ${({ theme, active }) =>
    active ? theme.palette.green[400] : theme.palette.grey[500]};
  ${({ theme }) => theme.borderRadius.all}
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-right: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(0.5)};
  padding-left: ${({ theme }) => theme.spacing(0.5)};

  color: ${({ theme, active }) =>
    active ? theme.palette.green[400] : theme.palette.grey[500]};
  font-size: 13px;
  line-height: 1.4em;
`
