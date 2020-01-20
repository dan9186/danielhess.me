import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Resume } from './resume/resume'

export const Pages = () => (
  <Container>
    <Switch>
      <Route exact path='/' component={Resume} />
    </Switch>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1;
  margin-top: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(2)};
  overflow: scroll;

  color: #ffffff;
  background-color: #31313a;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`
