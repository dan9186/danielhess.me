import React from 'react'
import styled from 'styled-components'

export const Subtitle = ({ children, onClick }) => (
  <Container onClick={onClick}>
    <div>{children}</div>
  </Container>
)

const Container = styled.h2`
  display: flex;
  flex-flow: column;
  margin: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(1)};
  padding-top: ${props => props.theme.spacing(2)};

  color: ${props => props.theme.palette.grey[300]};
  font-size: 17px;
  font-weight: 400;
  text-transform: uppercase;

  &:after {
    margin-top: ${props => props.theme.spacing(2)};
    content: '';
    background: -webkit-linear-gradient(
      left,
      ${props => props.theme.palette.grey[600]},
      ${props => props.theme.palette.grey[850]}
    );
    height: 1px;
    width: 100%;
  }
`
