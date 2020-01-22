import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme'

import { Card } from './components/card/card'

export const App = () => (
  <Theme>
    <AppContainer>
      <Card />
    </AppContainer>
  </Theme>
)

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;

  @media ${props => props.theme.media.width.xss} {
    flex-flow: column;
    max-width: 300px;
  }

  @media ${props => props.theme.media.width.xs} {
    flex-flow: column;
    max-width: 300px;
  }

  @media ${props =>
      `${props.theme.media.width.xs} and ${props.theme.media.landscape}`} {
  }

  @media ${props => props.theme.media.width.sm} {
    max-width: 480px;
  }

  @media ${props =>
      `${props.theme.media.width.sm} and ${props.theme.media.landscape}`} {
  }

  @media ${props => props.theme.media.width.md} {
    flex-flow: row nowrap;
    max-width: 850px;
  }

  @media ${props => props.theme.media.width.lg} {
    max-width: 1268px;
  }
`
