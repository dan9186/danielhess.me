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
  padding: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(4)};
  overflow: scroll;

  color: #ffffff;
  background-color: #31313a;
  ${props => props.theme.borderRadius.right}

  @media ${props => props.theme.media.width.md} {
    max-width: 350px;
    max-height: ${props => props.theme.spacing(4, 674)};
    margin-bottom: ${props => props.theme.spacing(0)};
  }

  @media ${props => props.theme.media.width.lg} {
    max-width: 663px;
  }
`
