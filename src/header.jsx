import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import './assets/styles/header.css'
import LogoImg from './assets/images/logo.png'
import {SocialBadge} from './social_badge.jsx'

export class Header extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    { this.profile("Daniel Hess", "daniel@danielhess.me", "dan9186", "Devops Engineer") }
                </div>
            </header>
        )
    }

    profile(name, email, username, description) {
        return (
            <div>
                <img className="profile-image img-responsive img-circle pull-left" src={LogoImg} alt="Daniel Hess" />
                <div className="profile-content pull-left">
                    <h1 className="name">{name}</h1>
                    <h2 className="desc">{description}</h2>
                    <ul className="social list-inline">
                        <SocialBadge icon="twitter" href={"https://twitter.com/" + username} />
                        <SocialBadge icon="linkedin" href={"https://www.linkedin.com/in/" + username + "/"} />
                        <SocialBadge icon="github" href={"https://github.com/" + username} last="true" />
                    </ul>
                </div>
                <a className="btn btn-cta-primary pull-right" href={"mailto:" + email}><i className="fa fa-paper-plane"></i> Contact Me</a>
            </div>
        )
    }
}
