import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export const Education = ({ education = [] }) => (
  <>
    <Subtitle>
      <Icon icon={faGraduationCap} />
      Education
    </Subtitle>
    {education.map(ed => (
      <Section>{ed.school}</Section>
    ))}
  </>
)

const Subtitle = styled.h2`
  display: flex;
  margin: 0;
  padding-left: 8px;
  padding-bottom: 8px;
  padding-top: 16px;

  color: #e3e3e3;
  font-size: 18px;
  font-weight: 400;

  border-bottom: 1px solid #515151;
`

const Section = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 8px;
  padding-bottom: 8px;
`

const Icon = styled(FontAwesomeIcon)`
  color: #78cc6d;
  font-size: 24px;
  padding-left: 8px;
  padding-right: 8px;
`
