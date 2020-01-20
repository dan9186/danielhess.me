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
  flex-flow: row nowrap;
  flex: 1;
  height: 100%;

  @media ${props => props.theme.media.width.xss} {
    max-height: 550px;
  }

  @media ${props => props.theme.media.width.xs} {
    max-height: 600px;
  }

  @media ${props =>
      `${props.theme.media.width.xs} and ${props.theme.media.landscape}`} {
    max-height: 350px;
  }

  @media ${props => props.theme.media.width.sm} {
    max-height: 674px;
  }

  @media ${props =>
      `${props.theme.media.width.sm} and ${props.theme.media.landscape}`} {
    max-height: 315px;
  }

  @media ${props => props.theme.media.width.md} {
    max-height: 674px;
  }

  @media ${props => props.theme.media.width.lg} {
    max-width: 1268px;
  }
`
