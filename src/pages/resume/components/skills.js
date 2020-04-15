import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { Icon, Subtitle } from '../../../components/typography'
import { Section } from './section'
import { SkillCategory } from './skill_category'

export const Skills = ({ skills = [] }) => {
  const [show, setShow] = useState(false)

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

  transform: rotate(${({ theme, show }) => (show ? '90deg' : '0')});
  transition: all 300ms;
`
