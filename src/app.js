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
  flex: 1 0 auto;
  height: 100%;
  margin: 8vh 6vw;

  @media (min-width : 1200px) {
    max-height: 674px;
    max-width: 1268px;
  }

  //tablet landscape
  @media (min-width: 1024px) and (max-width: 1600px) {
  }

  //tablet portrait
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-flow: column;
  }

  //smartphone landscape
  @media (min-width: 480px) and (max-width: 767px) {
  }

  //smartphone portrait
  @media (max-width: 479px) {
    flex-flow: column;
  }
`

/*
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}
*/
