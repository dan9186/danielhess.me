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
    <Preface preface={ResumeText.preface} />
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
  margin: ${props => props.theme.spacing(0)};
  margin-right: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(1)};

  color: #e3e3e3;
  font-size: 24px;
  font-weight: 600;

  &:after {
    margin-top: ${props => props.theme.spacing(2)};
    content: '';
    background: -webkit-linear-gradient(
      left,
      ${props => props.theme.palette.grey[600]},
      ${props => props.theme.palette.grey[850]}
    );
    height: 1px;
    width: 100%;
  }
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${props => props.theme.spacing(1)};

  &:last-child {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`
