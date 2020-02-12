import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Resume } from './resume/resume'

export const Pages = () => (
  <Container>
    <Switch>
      <Route exact path='/'>
        <Resume />
      </Route>
    </Switch>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  padding: ${props => props.theme.spacing(3)};
  margin-bottom: ${props => props.theme.spacing(4)};
  overflow: scroll;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.15);

  color: #ffffff;
  font-size: 16px;
  line-height: 1.4em;
  background-color: ${props => props.theme.palette.grey[850]};
    ${props => props.theme.borderRadius.right} @media
      ${props => props.theme.media.width.md} {
    max-width: 350px;
    max-height: ${props => props.theme.spacing(10, 674)};
    margin-bottom: ${props => props.theme.spacing(0)};
  }

  @media ${props => props.theme.media.width.lg} {
    max-width: 663px;
  }
`
