import React from 'react'
import styled from 'styled-components'

import {Logo} from './logo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export const Profile = (props) => {
  const name = props.name
  const email = props.email
  const username = props.username
  const description = props.description

  return (
    <Container>
      <ProfileImage size='150px' />
      <Content>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <SocialList>
          <li><a href={"https://github.com/" + username} target="_blank"><SocialIcon icon={faGithub} /></a></li>
          <li><a href={"https://twitter.com/" + username} target="_blank"><SocialIcon icon={faTwitter} /></a></li>
          <li><a href={"https://www.linkedin.com/in/" + username + "/"} target="_blank"><SocialIcon icon={faLinkedin} /></a></li>
          <li><a href={"mailto:" + email} target="_blank"><SocialIcon icon={faEnvelope} /></a></li>
        </SocialList>
      </Content>
      <Slogan>Dedicated to <span>Devops</span></Slogan>
    </Container>
  )
}

const Container = styled.div`
  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (min-width: 1400px) {
    width: 1360px;
  }

  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin: 30px 0;
  font-family: "Montserrat", sans-serif;
`

const ProfileImage = styled(Logo)`
  @media (max-width: 767px) {
  }

  border: white 0.15em solid;
  border-radius: 50%;
`

const Content = styled.div`
  @media (max-width: 767px) {
  }

  margin-left: 30px;
`

const Name = styled.h1`
  color: #F5F5F5;
  font-size: 38px;
  margin-top: 30px;
  margin-bottom: 5px;
`

const Description = styled.h2`
  color: #778492;
  font-family: "Lato", arial, sans-serif;
  font-weight: 600;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 15px;
`

const Slogan = styled.h1`
  color: #FFFFFF;
  font-size: 38px;
  text-align: right;
  margin-top: 30px;
  flex-grow: 1;

  span {
    color: #259d07;
  }
`

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: -5px;

  a {
    color: #FFFFFF;
    width: 36px;
    height: 36px;
    margin-left: 5px;
    margin-right: 5px;
    display: inline-block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    text-align: center;
  }

  a:hover {
    background: #259d07;
  }
`

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  padding-top: 8px;
`
