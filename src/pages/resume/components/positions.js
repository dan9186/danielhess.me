import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './icon'
import { Section } from './section'
import { Subtitle } from './subtitle'
import { Position } from './position'

export const Positions = ({ positions = [] }) => {
  const [show, setShow] = useState(true)

  const handleClick = e => {
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
        {positions.map(p => (
          <Position position={p} />
        ))}
      </Content>
    </Section>
  )
}

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(2)};

  overflow: hidden;
  max-height: ${props => (props.show ? '10000px' : '0')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 300ms linear;
`

const Chevron = styled(FontAwesomeIcon)`
  color: ${props => props.theme.palette.green[400]};
  font-size: 16px;
  padding-left: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};

  transform: rotate(${props => (!props.show ? '-90deg' : '0')});
  transition: all 300ms;
`
