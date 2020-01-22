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
  flex: 1 0 auto;
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  overflow-y: scroll;

  color: #ffffff;
  background-color: #31313a;
  ${props => props.theme.borderRadius.right}

  @media ${props => props.theme.media.width.md} {
    max-width: 350px;
    max-height: ${props => props.theme.spacing(4, 674)};
  }

  @media ${props => props.theme.media.width.lg} {
    max-width: 663px;
  }
`
