import React from 'react'
import styled from 'styled-components'

import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

import { ResumeText } from './resume_text'
import {
  Accomplishments,
  Education,
  Icon,
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

const Title = styled.h1`
  display: flex;
  flex-flow: column;
  margin: ${({ theme }) => theme.spacing(0)};
  margin-right: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(1)};

  color: #e3e3e3;
  font-size: 24px;
  font-weight: 600;

  &:after {
    margin-top: ${({ theme }) => theme.spacing(2)};
    content: '';
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.palette.grey[600]},
      ${({ theme }) => theme.palette.grey[850]}
    );
    height: 1px;
    width: 100%;
  }
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
