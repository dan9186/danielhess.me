import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'

import { Pages } from './pages'

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Body>
          <Pages />
        </Body>
      <Footer version={VERSION} commit={BUILD} />
    </React.Fragment>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    margin: 0;

    background: #DAE3E7;

    color: #434343;
    font-family: 'Lato', arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`

const Body = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`

const Content = styled.div`
  display: block;
`
