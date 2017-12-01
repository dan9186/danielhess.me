import React from 'react'

import './style.css'
import LogoImg from './images/logo.png'

import {Nav} from '../nav/nav.jsx'
import {SocialBadge} from '../social_badge/social_badge.jsx'

export class Header extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <header className="header">
                <Nav />
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
                        <SocialBadge icon="github" href={"https://github.com/" + username} last="true" />
                        <SocialBadge icon="twitter" href={"https://twitter.com/" + username} />
                        <SocialBadge icon="linkedin" href={"https://www.linkedin.com/in/" + username + "/"} />
                        <SocialBadge icon="envelope" href={"mailto:" + email} />
                    </ul>
                </div>
                <div className="profile-content pull-right">
                    <h1 className="slogan">Dedicated to <span className="highlighted">Devops</span></h1>
                </div>
            </div>
        )
    }
}
