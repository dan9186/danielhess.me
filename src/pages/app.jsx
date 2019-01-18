import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
        </Container>
      </React.Fragment>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    color: #434343;
    background: #DAE3E7;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;

  font-family: 'Lato', arial, sans-serif;
`
