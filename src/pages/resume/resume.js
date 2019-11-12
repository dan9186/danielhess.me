import React from 'react'
import styled from 'styled-components'

export const Resume = () => (
  <Container>
    <Title>Resume</Title>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-flow: column;
  padding: 16px;

  color: #a2a2a2;
`

const Title = styled.h1`
  display: flex;
  margin: 0;
  padding-left: 8px;
  padding-bottom: 16px;

  color: #e3e3e3;
  font-size: 24px;
  font-weight: 300;

  border-bottom: 1px solid #515151;

  &:before {
    content: ' ';

    display: flex;
    position: absolute;
    margin-top: 4px;
    margin-left: -8px;
    border-radius: 50%;
    height: 24px;
    width: 24px;

    background-color: rgb(120, 204, 109, 0.35);
  }
`
