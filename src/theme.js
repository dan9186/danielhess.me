import React from 'react'
import { ThemeProvider } from 'styled-components'

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
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
