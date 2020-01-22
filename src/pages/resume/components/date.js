import React from 'react'
import styled from 'styled-components'

export const Date = ({ start, end }) => (
  <Container active={end.toLowerCase() === 'present'}>
    {start} - {end}
  </Container>
)

const Container = styled.div`
  max-width: fit-content;
  border: 1px solid ${props => (props.active ? '#78cc6d' : '#666666')};
  ${props => props.theme.borderRadius.all}
  margin-top: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(0.5)};
  padding-left: ${props => props.theme.spacing(0.5)};

  color: ${props => (props.active ? '#78cc6d' : '#666666')};
  font-size: 13px;
`
