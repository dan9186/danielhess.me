import React from 'react'
import ReactDOM from 'react-dom'

import 'whatwg-fetch'

import './style.css'

export class Footer extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <footer className="footer">
                <div className="container text-center">
                    <small className="copyright">© All rights reserved. Daniel Hess 2017</small>
                </div>
            </footer>
        )
    }
}
