import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

export const Pages = () => (
  <Container>
    <Switch>
    </Switch>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1;
  margin-top: 16px;
  margin-bottom: 16px;

  color: #ffffff;
  background-color: #31313a;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`
