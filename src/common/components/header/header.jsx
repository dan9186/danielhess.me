import React from 'react'
import {Grid,Image} from 'react-bootstrap'
import styled, {css} from 'styled-components'

import './style.css'
import LogoImg from './images/logo.png'
import HeaderBgImg from './images/header-bg.jpg'

import {Navigation} from '../navigation/navigation.jsx'
import {SocialBadge} from '../social_badge/social_badge.jsx'

export class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <HeaderWrapper>
                <Navigation />
                { this.profile("Daniel Hess", "daniel@danielhess.me", "dan9186", "Devops Engineer") }
            </HeaderWrapper>
        )
    }

    profile(name, email, username, description) {
        return (
            <Grid>
                <ProfileImage src={LogoImg} alt="Daniel Hess" circle responsive />
                <ProfileContent left>
                    <ProfileName>{name}</ProfileName>
                    <ProfileDescription>{description}</ProfileDescription>
                    <ul className="social list-inline">
                        <SocialBadge icon="github" href={"https://github.com/" + username} last="true" />
                        <SocialBadge icon="twitter" href={"https://twitter.com/" + username} />
                        <SocialBadge icon="linkedin" href={"https://www.linkedin.com/in/" + username + "/"} />
                        <SocialBadge icon="envelope" href={"mailto:" + email} />
                    </ul>
                </ProfileContent>
                <ProfileContent right>
                    <ProfileSlogan>Dedicated to <Highlighted>Devops</Highlighted></ProfileSlogan>
                </ProfileContent>
            </Grid>
        )
    }
}

const HeaderWrapper = styled.header`
	padding: 30px 0;
	margin-top: 55px;
	background-image: url(${HeaderBgImg});
	background-size: cover;
	background-repeat: repeat, no-repeat;
	background-position: bottom center;
	border-bottom: #778492 0.4em solid;

    @media (max-width: 767px) {
		text-align: center;
    }
`

const ProfileImage = styled(Image)`
    @media (max-width: 767px) {
		float: none !important;
		margin: 0 auto;
    }

    float: left;
	height: 150px !important;
	border: white 0.15em solid !important;
`

const ProfileContent = styled.div`
    @media (max-width: 767px) {
		float: none !important;
		text-align: center;
		margin-left: 0;
    }

	margin-left: 30px;

    ${props => props.left && css`
    float: left;
    `}

    ${props => props.right && css`
    float: right;
    `}
`

const ProfileName = styled.h1`
	margin-top: 30px;
	color: #f5f5f5;
	font-size: 38px;
	margin-bottom: 5px;
`

const ProfileDescription = styled.h2`
	color: #778492;
	font-family: "Lato", arial, sans-serif;
	font-weight: 600;
	font-size: 24px;
	margin-top: 0;
	margin-bottom: 15px;
`

const ProfileSlogan = styled.h1`
	color: #FFFFFF;
`

const Highlighted = styled.span`
	color: #259d07;
`
