import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Resume } from './resume/resume'

export const Pages = () => (
  <Container>
    <Switch>
      <Route exact path='/' component={ Resume } />
    </Switch>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1;
  margin-top: 16px;
  margin-bottom: 16px;
  overflow: scroll;

  color: #ffffff;
  background-color: #31313a;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`
