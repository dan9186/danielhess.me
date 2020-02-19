import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Theme } from './theme/'
import { ErrorBoundary } from './error_boundary'
import { Loading } from './components/loading/loading'

const App = React.lazy(() => import('./app'))

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <Theme>
        <React.Suspense fallback={<Loading />}>
          <App />
        </React.Suspense>
      </Theme>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('app'),
)
