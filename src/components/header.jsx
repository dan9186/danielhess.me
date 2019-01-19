import React from 'react'
import styled from 'styled-components'

import HeaderBgImg from './../assets/images/header-bg.jpg'

import {Navigation} from './navigation'
import {Profile} from './profile'

export class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Profile name='Daniel Hess' email='daniel@danielhess.me' username='dan9186' description='Devops Engineer' />
      </Container>
    )
  }
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

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
