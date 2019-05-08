import React from 'react'
import styled from 'styled-components'

export const Skill = (props) => {
  return (
    <li>
      <SkillName>{ props.name }</SkillName>
      <SkillLevel level={ props.level } />
    </li>
  )
}

const SkillLevel = (props) => {
  const level = props.level ? props.level : 0

  switch (level) {
    case 1: return (
      <div>
        <SkillMark solid={ 'true' } />
        <SkillMark />
        <SkillMark />
      </div>
    )
    case 2: return (
      <div>
        <SkillMark solid={ 'true' } />
        <SkillMark solid={ 'true' } />
        <SkillMark />
      </div>
    )
    case 3: return (
      <div>
        <SkillMark solid={ 'true' } />
        <SkillMark solid={ 'true' } />
        <SkillMark solid={ 'true' } />
      </div>
    )
    default: return (
      <div>
        <SkillMark />
        <SkillMark />
        <SkillMark />
      </div>
    )
  }
}

const SkillName = styled.h5`
  font-family: Montserrat,sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #778492;
  margin-bottom: 0;
`

const SkillMark = styled.span`
  background-color: ${props => props.solid ? '#17CF5D' : '#D6D6D6'};
  display: inline-block;
  height: 2px;
  margin-right: 10px;
  width: 55px;
`
