import React from 'react'
import {Switch,Route} from 'react-router-dom'
import styled, {createGlobalStyle} from 'styled-components'

import {Header} from '../components/header'
import {Footer} from '../components/footer'

/*
import {Home} from './home'
import {Resume} from './resume'
import {Slides} from './slides'
*/

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Container>
          <Switch>
            {/*
            <Route exact path='/' component={Home}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/slides' component={Slides}/>
            */}
          </Switch>
        </Container>
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
    align-items: stretch;
    display: flex;
    flex-direction: column;
  }
`

const Container = styled.div`
  flex-grow: 1;
`
