import React from 'react'
import ReactDOM from 'react-dom'

import 'whatwg-fetch'

import {Home} from './pages/home/home.jsx'

import './common/base.css'

ReactDOM.render((
    <Home />
), document.getElementById('app'))
