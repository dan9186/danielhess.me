import React from 'react'
import styled from 'styled-components'

import { Section, Row, Columns, SubHeading, Divider } from '../../components/section/section'
import { Slide } from './components/slide'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Slides = () => (
  <Row>
    <Section>
      <SubHeading>
        Slides <a href="https://github.com/dan9186/slides" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
      </SubHeading>
      <Divider />
      <Columns>
        <Slide
          url='http://talks.godoc.org/github.com/dan9186/slides/go-gotchas/go-gotchas.slide#1'
          title='gotchas in go'
          icon='exclamation-triangle'
          description='Different hangups in go that are likely to catch people not paying attention.'
        />
      </Columns>
    </Section>
  </Row>
)
