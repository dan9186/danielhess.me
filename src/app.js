/* global VERSION, BUILD */

import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { ErrorBoundary } from './error_boundary'

import { Card } from './components/card/card'
import { Pages } from './pages'

export const App = () => (
  <ErrorBoundary>
    <GlobalStyle />
    <AppContainer>
      <Card />
      <Pages />
    </AppContainer>
  </ErrorBoundary>
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
  flex-flow: row nowrap;
  flex: 1;
  height: 100%;
  max-width: 1268px;
  max-height: 674px;
  margin: 8vh 6vw;

  @media (min-width : 1200px) {
  }

  //tablet landscape
  @media (min-width: 1024px) and (max-width: 1600px) {
  }

  //tablet portrait
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  //smartphone landscape
  @media (min-width: 480px) and (max-width: 767px) {
  }

  //smartphone portrait
  @media (max-width: 479px) {
  }
`
