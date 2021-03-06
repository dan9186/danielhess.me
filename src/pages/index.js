import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Resume } from './resume/resume'
import { Hireme } from './hireme'
import { Projects } from './projects'
import { Blog } from './blog'

export default () => (
  <Container>
    <Switch>
      <Route exact path='/'>
        <Resume />
      </Route>
      <Route exact path='/hireme'>
        <Hireme />
      </Route>
      <Route exact path='/projects'>
        <Projects />
      </Route>
      <Route exact path='/blog'>
        <Blog />
      </Route>
    </Switch>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  padding: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  overflow: scroll;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.15);

  color: ${({ theme }) => theme.palette.white};
  font-size: 16px;
  line-height: 1.4em;
  background-color: ${({ theme }) => theme.palette.grey[850]};
    ${({ theme }) => theme.borderRadius.right} @media
      ${({ theme }) => theme.media.width.md} {
    max-width: 350px;
    max-height: ${({ theme }) => theme.spacing(10, 674)};
    margin-bottom: ${({ theme }) => theme.spacing(0)};
  }

  @media ${({ theme }) => theme.media.width.lg} {
    max-width: 663px;
  }
`
