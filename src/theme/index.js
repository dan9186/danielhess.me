import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { borderRadius } from './border_radius'
import { media } from './media'
import { palette } from './palette/'
import { spacing } from './spacing'

const theme = {
  borderRadius,
  media,
  palette,
  spacing,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export const StoryTheme = story => <Theme>{story()}</Theme>

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    display: flex;
    flex: 1 0 auto;
    height: 100%;
    margin: ${props => props.theme.spacing(0)};
    font-family: 'Lato', arial, sans-serif;
    background-color: #26262d;
  }

  #app {
    justify-content: center;
    align-items: center;
  }
`
