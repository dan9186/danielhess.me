import React from 'react'
import styled from 'styled-components'

import { faListAlt } from '@fortawesome/free-regular-svg-icons'

import { Icon } from './icon'
import { Section } from './section'
import { SkillCategory } from './skill_category'
import { Subtitle } from './subtitle'

export const Skills = ({ skills = [] }) => (
  <Section>
    <Subtitle>
      <Icon icon={faListAlt} />
      Skills
    </Subtitle>
    <Content>
      {skills.map(({ category, entries }) => (
        <SkillCategory title={category} entries={entries} />
      ))}
    </Content>
  </Section>
)

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(2)};
`
