import React from 'react'
import ReactDOM from 'react-dom'
import LogoImg from './assets/images/logo.png'
import 'whatwg-fetch'
import {SocialBadge} from './social_badge.jsx'

export class Profile extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <img className="profile-image img-responsive img-circle pull-left" src={LogoImg} alt="Daniel Hess" />
                <div className="profile-content pull-left">
                    <h1 className="name">{this.props.name}</h1>
                    <h2 className="desc">{this.props.desc}</h2>
                    <ul className="social list-inline">
                        <SocialBadge icon="twitter" href={"https://twitter.com/" + this.props.username} />
                        <SocialBadge icon="linkedin" href={"https://www.linkedin.com/in/" + this.props.username + "/"} />
                        <SocialBadge icon="github" href={"https://github.com/" + this.props.username} last="true" />
                    </ul>
                </div>
                <a className="btn btn-cta-primary pull-right" href={"mailto:" + this.props.email}><i className="fa fa-paper-plane"></i> Contact Me</a>
            </div>
        )
    }
}
