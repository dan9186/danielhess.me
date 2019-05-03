import React from 'react'
import styled from 'styled-components'

import { Section, Row, Columns } from '../../components/common/section'
import { Slide } from '../../components/slide'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export class Slides extends React.Component {
  render() {
    return (
      <Row>
        <Section>
          <h2>Slides <a href="https://github.com/dan9186/slides" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></h2>
          <hr />
          <Columns>
            <Slide url='http://talks.godoc.org/github.com/dan9186/slides/go-gotchas/go-gotchas.slide#1' title='gotchas in go' icon='exclamation-triangle' description='Different hangups in go that are likely to catch people not paying attention.' />
          </Columns>
        </Section>
      </Row>
    )
  }
}