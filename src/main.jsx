import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import 'whatwg-fetch'

import {App} from './common/components/app/app.jsx'

import 'bootstrap/dist/css/bootstrap.css'
import './common/base.css'

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>

), document.getElementById('app'))
