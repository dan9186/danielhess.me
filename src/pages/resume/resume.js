import React from 'react'
import styled from 'styled-components'

import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

import { ResumeText } from './resume_text'
import { Icon, Title } from '../../components/typography'
import {
  Accomplishments,
  Education,
  Info,
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
      <Info info={ResumeText.info} />
    </Row>
    <Row>
      <Education education={ResumeText.education} />
      <Accomplishments accomplishments={ResumeText.accomplishments} />
    </Row>
    <Row>
      <Positions positions={ResumeText.positions} />
    </Row>
    <Row>
      <Skills skills={ResumeText.skills} />
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

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  &:last-child {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`
