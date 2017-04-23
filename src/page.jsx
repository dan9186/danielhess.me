import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import './assets/styles/page.css'
import {Header} from './header.jsx'
import {Body} from './body.jsx'
import {Footer} from './footer.jsx'

export class Page extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}
