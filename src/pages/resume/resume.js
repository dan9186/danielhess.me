import React from 'react'
import styled from 'styled-components'

import { ResumeText } from './resume_text'

export const Resume = () => (
  <Container>
    <Title>Resume</Title>
    <Section>{ ResumeText.preface }</Section>
    <Subtitle>Education</Subtitle>
    <Section>{ ResumeText.education[0].school }</Section>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-flow: column;
  max-width: 755px;
  padding: 16px;

  color: #a2a2a2;
`

const Title = styled.h1`
  display: flex;
  margin: 0;
  padding-left: 8px;
  padding-bottom: 16px;

  color: #e3e3e3;
  font-size: 24px;
  font-weight: 300;

  border-bottom: 1px solid #515151;

  &:before {
    content: ' ';

    display: flex;
    border-radius: 50%;
    margin: 3px 4px 0px;
    height: 24px;
    width: 24px;

    background-color: rgb(120, 204, 109, 0.35);
    background: linear-gradient(145deg, rgba(120,204,109,0.35) 0%, rgba(49,49,58,1) 100%);
  }
`

const Subtitle = styled.h2`
  display: flex;
  margin: 0;
  padding-left: 8px;
  padding-bottom: 8px;
  padding-top: 16px;

  color: #e3e3e3;
  font-size: 18px;
  font-weight: 300;

  border-bottom: 1px solid #515151;
`

const Section = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 8px;
`
