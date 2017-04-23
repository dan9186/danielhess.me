import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'

export class Footer extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <footer role="footer">
                <div className="container">
                    <p>© All rights reserved. Daniel Hess 2017</p>
                </div>
            </footer>
        )
    }
}
