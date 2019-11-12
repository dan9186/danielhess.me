import React from 'react'
import styled from 'styled-components'

import { Logo } from '../logo/logo'

export const Card = () => (
  <Container>
    <Background />
    <StyledLogo size={ '150px' } />
    <Name>Daniel Hess</Name>
    <Title>Software Engineer</Title>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  max-width: 480px;
  z-index: 1;

  background-color: #31313a;
  border-radius: 4px;
  overflow: hidden;

  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.15);

  &::before {
    display: flex;
    flex: 1 0 480px;
    width: 100%;
    height: 100%;
    max-width: 480px;
    max-height: 674px;
    z-index: -1;

    position: absolute;
    margin-top: -16px;
    margin-left: -16px;

    content: ' ';
    background: #31313a;
    opacity: 0.3;
  }
`

const Background = styled.div`
  display: flex;
  flex: 1 0 350px;
  max-height: 350px;
  z-index: -1;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background: rgb(65,174,118);
  background: radial-gradient(circle, rgba(65,174,118,1) 0%, rgba(0,68,27,1) 100%);

  &::before{
    content: ' ';
    height: 80px;
    width: 100%;

    background: #31313a;
    transform: translate(-10px,325px) rotate(5deg);
  }

  &::after {
    content: ' ';
    height: 80px;
    width: 100%;

    background: #31313a;
    transform: translate(10px,325px) rotate(-5deg);
  }
`

const StyledLogo = styled(Logo)`
  margin-top: -80px;
`

const Name = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 10px;

  color: #e3e3e3;
  font-size: 34px;
  line-height: 32px;
  font-weight: 300;
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 0;

  color: #78cc6d;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
`