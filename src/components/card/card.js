import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import { Logo } from '../logo/logo'

export const Card = () => (
  <Container>
    <Background />
    <StyledLogo size='150px' />
    <Name>Daniel Hess</Name>
    <Title>Software Engineer</Title>
    <Icons>
      <StyledLink href='https://github.com/dan9186' target='_blank'>
        <Icon icon={faGithub} />
      </StyledLink>
      <StyledLink href='https://twitter.com/dan9186' target='_blank'>
        <Icon icon={faTwitter} />
      </StyledLink>
      <StyledLink href='https://www.linkedin.com/in/dan9186/' target='_blank'>
        <Icon icon={faLinkedin} />
      </StyledLink>
      <StyledLink href='mailto:daniel@danielhess.me' target='_blank'>
        <Icon icon={faEnvelope} />
      </StyledLink>
    </Icons>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-flow: column;
  z-index: 1;
  height: 100%;
  width: 100%;

  background-color: #31313a;
  border-radius: 4px;
  overflow: hidden;

  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.15);

  @media ${props => props.theme.media.width.xss} {
    max-height: 550px;
    max-width: 300px;
  }

  @media ${props => props.theme.media.width.xs} {
    max-height: 600px;
    max-width: 300px;
    filter: drop-shadow(-15px -15px 0px #292931);
  }

  @media ${props =>
      `${props.theme.media.width.xs} and ${props.theme.media.landscape}`} {
    max-height: 350px;
    max-width: 480px;
    filter: drop-shadow(-15px -15px 0px #292931);
  }

  @media ${props => props.theme.media.width.sm} {
    max-height: 674px;
    max-width: 480px;
    filter: drop-shadow(-15px -15px 0px #292931);
  }

  @media ${props =>
      `${props.theme.media.width.sm} and ${props.theme.media.landscape}`} {
    max-height: 315px;
  }

  @media ${props => props.theme.media.width.md} {
    max-height: 674px;
  }
`

const Background = styled.div`
  display: flex;
  flex: 1 0 350px;
  z-index: -1;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background: rgb(65, 174, 118);
  background: radial-gradient(
    circle,
    rgba(65, 174, 118, 1) 0%,
    rgba(0, 68, 27, 1) 100%
  );

  @media ${props => props.theme.media.width.xss} {
    max-height: 270px;
  }

  @media ${props => props.theme.media.width.xs} {
    max-height: 270px;
  }

  @media ${props =>
      `${props.theme.media.width.xs} and ${props.theme.media.landscape}`} {
    max-height: 120px;
  }

  @media ${props => props.theme.media.width.sm} {
    max-height: 350px;
  }

  @media ${props =>
      `${props.theme.media.width.sm} and ${props.theme.media.landscape}`} {
    max-height: 120px;
  }

  @media ${props => props.theme.media.width.md} {
    max-height: 350px;
  }

  &::before {
    content: ' ';
    height: 80px;
    width: 100%;

    background: #31313a;

    @media ${props => props.theme.media.width.xss} {
      transform: translate(-10px, 250px) rotate(5deg);
    }

    @media ${props => props.theme.media.width.xs} {
      transform: translate(-10px, 250px) rotate(5deg);
    }

    @media ${props =>
        `${props.theme.media.width.xs} and ${props.theme.media.landscape}`} {
      transform: translate(-10px, 111px) rotate(5deg);
    }

    @media ${props => props.theme.media.width.sm} {
      transform: translate(-10px, 325px) rotate(5deg);
    }

    @media ${props =>
        `${props.theme.media.width.sm} and ${props.theme.media.landscape}`} {
      transform: translate(-10px, 111px) rotate(5deg);
    }

    @media ${props => props.theme.media.width.md} {
      transform: translate(-10px, 325px) rotate(5deg);
    }
  }

  &::after {
    content: ' ';
    height: 80px;
    width: 100%;

    background: #31313a;

    @media ${props => props.theme.media.width.xss} {
      transform: translate(10px, 250px) rotate(-5deg);
    }

    @media ${props => props.theme.media.width.xs} {
      transform: translate(10px, 250px) rotate(-5deg);
    }

    @media ${props =>
        `${props.theme.media.width.xs} and ${props.theme.media.landscape}`} {
      transform: translate(10px, 111px) rotate(-5deg);
    }

    @media ${props => props.theme.media.width.sm} {
      transform: translate(10px, 325px) rotate(-5deg);
    }

    @media ${props =>
        `${props.theme.media.width.sm} and ${props.theme.media.landscape}`} {
      transform: translate(10px, 111px) rotate(-5deg);
    }

    @media ${props => props.theme.media.width.md} {
      transform: translate(10px, 325px) rotate(-5deg);
    }
  }
`

const StyledLogo = styled(Logo)`
  align-self: center;
  margin-top: ${props => props.theme.spacing(-10)};

  border: 4px solid #31313a;
  border-radius: 50%;
`

const Name = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.spacing(0)};
  margin-bottom: ${props => props.theme.spacing()};

  color: #e3e3e3;
  font-size: 34px;
  line-height: ${props => props.theme.spacing(4)};
  font-weight: 400;
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.spacing(0)};
  margin-bottom: ${props => props.theme.spacing(2)};

  color: #78cc6d;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
`

const Icons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin-top: ${props => props.theme.spacing()};
`

const StyledLink = styled.a`
  text-decoration: none;
`

const Icon = styled(FontAwesomeIcon)`
  color: #a2a2a2;
  font-size: 24px;
  transition: color 0.4s ease;

  &:hover {
    color: #78cc6d;
  }
`
