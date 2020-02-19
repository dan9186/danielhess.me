import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Logo } from '../logo/logo'

export const Loading = () => {
  const size = 270

  return (
    <Container>
      <Border size={size} thickness={16} />
      <StyledLogo size={`${size}px`} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const Border = styled.div`
  position: absolute;
  z-index: 1;
  ${({ size, thickness }) => `
    height: ${size + thickness}px;
    width: ${size + thickness}px;
  `}

  border-radius: 50%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.palette.green['400']} 0%,
    ${({ theme }) => theme.palette.green['900']} 100%
  );
  animation: ${rotation} 1s infinite linear;
`

const StyledLogo = styled(Logo)`
  z-index: 2;
`
