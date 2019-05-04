import React from 'react'
import styled from 'styled-components'

import { Section, Row, Col, SubHeading, Divider } from '../../components/section/section'
import { Slide } from './components/slide'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Slides = () => (
  <Row>
    <Col>
      <Section>
        <SubHeading>
          Slides <a href="https://github.com/dan9186/slides" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        </SubHeading>
        <Divider />
        <Centering>
          <Slide url='http://talks.godoc.org/github.com/dan9186/slides/go-gotchas/go-gotchas.slide#1' title='gotchas in go' icon='exclamation-triangle' description='Different hangups in go that are likely to catch people not paying attention.' />
        </Centering>
      </Section>
    </Col>
  </Row>
)

const Centering = styled.div`
  display: flex;
  justify-content: center;
`
