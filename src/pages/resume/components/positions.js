import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Icon, Subtitle } from '../../../components/typography'
import { Section } from './section'
import { Position } from './position'

export const Positions = ({ positions = [] }) => {
  const [show, setShow] = useState(true)

  const handleClick = (e) => {
    setShow(!show)
    const target = e.target

    if (!show) {
      setTimeout(
        () =>
          target.scrollIntoView({
            behavior: 'smooth',
          }),
        305,
      )
    }
  }

  return (
    <Section>
      <Subtitle onClick={handleClick}>
        <Icon icon={faBriefcase} />
        Positions
        <Chevron icon={faChevronDown} show={show} />
      </Subtitle>
      <Content show={show}>
        {positions.map((p) => (
          <Position position={p} />
        ))}
      </Content>
    </Section>
  )
}

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(0)};
  padding-left: ${({ theme }) => theme.spacing(2)};

  overflow: hidden;
  max-height: ${({ theme, show }) => (show ? '10000px' : '0')};
  opacity: ${({ theme, show }) => (show ? '1' : '0')};
  transition: all 300ms linear;
`

const Chevron = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.green[400]};
  font-size: 16px;
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};

  transform: rotate(${({ theme, show }) => (!show ? '-90deg' : '0')});
  transition: all 300ms;
`
