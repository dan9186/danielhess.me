import React from 'react'
import {Col,Grid,Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

export class Slides extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <SectionWrapper>
        <Col md={12} sm={12} xs={12}>
          <Section>
            <SectionInner>
              <SectionHeader>Slides <a href="https://github.com/dan9186/slides" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></SectionHeader>
              <hr />
              <Row className="text-center">
                <Col md={4} mdOffset={4}>
                  {this.render_slide_card(
                    "warning",
                    "Gotchas In Go",
                    "Different hangups in go that are likely to catch people not paying attention.",
                    "http://talks.godoc.org/github.com/dan9186/slides/go-gotchas/go-gotchas.slide#1",
                  )}
                </Col>
              </Row>
            </SectionInner>
          </Section>
        </Col>
      </SectionWrapper>
    )
  }

  render_slide_card(icon, title, description, url) {
    return (
      <div>
        <a href={url} target="_blank">
          <FontAwesomeIcon icon={faExclamationTriangle} size="5x" />
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    )
  }
}

const SectionWrapper = styled(Grid)`
  padding-top: 30px;
  padding-bottom: 30px;
`

const Section = styled.section`
  margin-bottom: 30px;
  background: #fff;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border: 2px solid #778492;
`

const SectionInner = styled.div`
  padding: 30px;

    hr {
        border: #C2EAD2 1px solid;
    }
`

const SectionHeader = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    color: #545e69;
    font-size: 24px;
`
