import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme/'
import { Card } from './components'
import { Pages } from './pages'

export const App = () => (
  <Theme>
    <AppContainer>
      <Card />
      <Pages />
    </AppContainer>
  </Theme>
)

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  @media ${({ theme }) => theme.media.width.xss} {
    flex-flow: column;
    max-width: 300px;
  }

  @media ${({ theme }) => theme.media.width.xs} {
    flex-flow: column;
    max-width: 300px;
  }

  @media ${({ theme }) =>
      `${theme.media.width.xs} and ${theme.media.landscape}`} {
  }

  @media ${({ theme }) => theme.media.width.sm} {
    max-width: 480px;
  }

  @media ${({ theme }) =>
      `${theme.media.width.sm} and ${theme.media.landscape}`} {
  }

  @media ${({ theme }) => theme.media.width.md} {
    flex-flow: row nowrap;
    max-width: 850px;
  }

  @media ${({ theme }) => theme.media.width.lg} {
    max-width: 1168px;
  }
`
