import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'

import 'whatwg-fetch'

import './style.css'

export class Nav extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <nav className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><NavLink to='/' exact activeClassName="active">Home</NavLink></li>
                            <li><NavLink to='/resume' activeClassName="active">Resume</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
