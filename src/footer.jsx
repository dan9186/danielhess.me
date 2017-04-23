import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import './assets/styles/footer.css'

export class Footer extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <footer className="footer">
                <div className="container text-center">
                    <small className="copyright">Copyright 2017 - Daniel Hess</small>
                </div>
            </footer>
        )
    }
}
