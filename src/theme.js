import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const spacingMultiplier = 8

const theme = {
  media: {
    landscape: `(orientation: landscape)`,
    width: {
      xss: `(max-width: 399px)`,
      xs: `(min-width: 400px)`,
      sm: `(min-width: 700px)`,
      md: `(min-width: 900px)`,
      lg: `(min-width: 1200px)`,
      xl: `(min-width: 1800px)`,
    },
  },
  spacing: (x = 1) => `${x * spacingMultiplier}px`,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

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
