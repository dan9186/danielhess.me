import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import 'whatwg-fetch'

import {Home} from './pages/home/home.jsx'

import './common/base.css'

ReactDOM.render((
    <BrowserRouter>
        <Home />
    </BrowserRouter>

), document.getElementById('app'))
