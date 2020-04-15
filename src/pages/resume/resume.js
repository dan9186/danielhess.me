import React from 'react'
import styled from 'styled-components'

import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

import { ResumeText } from './resume_text'
import { Icon, Title } from '../../components/typography'
import { Row } from '../../components/grid'
import {
  Accomplishments,
  Education,
  Positions,
  Preface,
  Skills,
} from './components'

export const Resume = () => (
  <Container>
    <Title>
      <div>
        <Icon icon={faFileAlt} />
        Resume
      </div>
    </Title>
    <Row>
      <Preface preface={ResumeText.preface} />
    </Row>
    <Row>
      <Education education={ResumeText.education} />
      <Accomplishments accomplishments={ResumeText.accomplishments} />
    </Row>
    <Row>
      <Skills skills={ResumeText.skills} />
    </Row>
    <Row>
      <Positions positions={ResumeText.positions} />
    </Row>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-flow: column;
  max-width: fit-content;

  color: #a2a2a2;
  font-weight: 300;
`
