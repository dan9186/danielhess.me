import React from 'react'
import styled from 'styled-components'

import { faListAlt } from '@fortawesome/free-regular-svg-icons'

import { Icon } from './icon'
import { Section } from './section'
import { Subtitle } from './subtitle'
import { Skill } from './skill'

const Category = ({ title, entries }) => (
  <CategoryContainer>
    <Subtitle>{title}</Subtitle>
    <Entries>
      {entries.map(({ name, level }) => (
        <Skill name={name} level={level} />
      ))}
    </Entries>
  </CategoryContainer>
)

export const Skills = ({ skills = [] }) => (
  <Section>
    <Subtitle>
      <Icon icon={faListAlt} />
      Skills
    </Subtitle>
    <Content>
      {skills.map(({ category, entries }) => (
        <Category title={category} entries={entries} />
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

const CategoryContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 47%;
  margin-right: ${props => props.theme.spacing(2)};
`

const Entries = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-left: ${props => props.theme.spacing(1)};
`
