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
    margin: ${props => props.theme.spacing(0)};
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
