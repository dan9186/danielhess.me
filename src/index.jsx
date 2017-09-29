import React from 'react'
import ReactDOM from 'react-dom'

import 'whatwg-fetch'
import './assets/styles/page.css'

import {Header} from './header.jsx'
import {Body} from './body.jsx'
import {Footer} from './footer.jsx'

ReactDOM.render((
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
), document.getElementById('app'))
