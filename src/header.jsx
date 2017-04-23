import React from 'react'
import ReactDOM from 'react-dom'
import LogoImg from './assets/images/logo.png'
import 'whatwg-fetch'

export class Header extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <header role="main-header">
                <div className="container">
                    <img className="logo img-circle pull-left" src={LogoImg} alt="Logo" />
                    <div className="identity pull-left">
                        <h1>Daniel Hess</h1>
                        <h4>Devops Engineer</h4>
                    </div>
                    <ul role="socil-icons">
                        <li><a href="https://github.com/dan9186" target="_blank" title="Github"><i className="fa fa-2x fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/dan9186/" target="_blank" title="linkedin"><i className="fa fa-2x fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com/dan9186" target="_blank" title="twitter"><i className="fa fa-2x fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="mailto:daniel@danielhess.me" title="Contact"><i className="fa fa-2x fa-envelope" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
