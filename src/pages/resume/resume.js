import React from 'react'
import styled from 'styled-components'

import { ResumeText } from './resume_text'
import { Accomplishments, Education, Info, Preface, Skills } from './components'

export const Resume = () => (
  <Container>
    <Title>Resume</Title>
    <Preface preface={ResumeText.preface} />
    <Row>
      <Info info={ResumeText.info} />
    </Row>
    <Row>
      <Education education={ResumeText.education} />
      <Accomplishments accomplishments={ResumeText.accomplishments} />
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
  margin: ${props => props.theme.spacing(0)};
  margin-right: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(1)};
  padding-bottom: ${props => props.theme.spacing(2)};

  color: #e3e3e3;
  font-size: 24px;
  font-weight: 600;

  border-bottom: 1px solid #515151;

  &:before {
    content: ' ';

    display: flex;
    border-radius: 50%;
    margin: 3px 4px 0px;
    height: ${props => props.theme.spacing(3)};
    width: ${props => props.theme.spacing(3)};

    background-color: rgb(120, 204, 109, 0.35);
    background: linear-gradient(
      145deg,
      rgba(120, 204, 109, 0.35) 0%,
      rgba(49, 49, 58, 1) 100%
    );
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
