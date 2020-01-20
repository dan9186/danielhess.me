import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Theme } from './theme'
import { ErrorBoundary } from './error_boundary'

import { Card } from './components/card/card'

export const App = () => (
  <Theme>
    <ErrorBoundary>
      <GlobalStyle />
      <AppContainer>
        <Card />
      </AppContainer>
    </ErrorBoundary>
  </Theme>
)

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    display: flex;
    flex: 1 0 auto;
    height: 100%;
    margin: 0;
    font-family: 'Lato', arial, sans-serif;
    background-color: #26262d;
  }

  #app {
    justify-content: center;
    align-items: center;
  }
`

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  flex: 1;
  height: 100%;

  @media ${props => props.theme.media.width.xss} {
    max-height: 674px;
  }

  @media ${props => props.theme.media.width.xs} {
    max-height: 674px;
  }

  @media ${props => props.theme.media.width.sm} {
    max-height: 674px;
  }

  @media ${props => props.theme.media.width.md} {
    max-height: 674px;
  }

  @media ${props => props.theme.media.width.lg} {
    max-height: 674px;
    max-width: 1268px;
  }
`
