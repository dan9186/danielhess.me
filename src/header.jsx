import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import './assets/styles/header.css'
import {Profile} from './profile.jsx'

export class Header extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    <Profile name="Daniel Hess" desc="Devops Engineer" email="daniel@danielhess.me" username="dan9186"/>
                </div>
            </header>
        )
    }
}
