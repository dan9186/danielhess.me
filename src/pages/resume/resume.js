import React from 'react'
import styled from 'styled-components'

import { ResumeText } from './resume_text'
import { Accomplishments, Education, Info, Preface } from './components'

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
  padding-left: 8px;
  padding-bottom: 16px;

  color: #e3e3e3;
  font-size: 24px;
  font-weight: 600;

  border-bottom: 1px solid #515151;

  &:before {
    content: ' ';

    display: flex;
    border-radius: 50%;
    margin: 3px 4px 0px;
    height: 24px;
    width: 24px;

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
