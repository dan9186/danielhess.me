import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './icon'
import { Section } from './section'
import { SkillCategory } from './skill_category'
import { Subtitle } from './subtitle'

export const Skills = ({ skills = [] }) => {
  const [show, setShow] = useState(false)

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
        <Icon icon={faListAlt} />
        Skills
        <Chevron icon={faChevronRight} show={show} />
      </Subtitle>
      <Content show={show}>
        {skills.map(({ category, entries }) => (
          <SkillCategory title={category} entries={entries} />
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

  transform: rotate(${props => (props.show ? '90deg' : '0')});
  transition: all 300ms;
`
