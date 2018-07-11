import React from 'react'
import {Col,Grid,Row} from 'react-bootstrap'
import {Icon} from 'react-fa'
import styled from 'styled-components'

export class Slides extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <SectionWrapper>
                <Col md={12} sm={12} xs={12}>
                    <div className="section">
                        <div className="section-inner">
                            <h2 className="heading">
                                Slides <a href="https://github.com/dan9186/slides" target="_blank"><Icon name="github" /></a>
                            </h2>
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
                        </div>
                    </div>
                </Col>
            </SectionWrapper>
        )
    }

    render_slide_card(icon, title, description, url) {
        return (
            <div>
                <a href={url} target="_blank">
                    <Icon name={icon} size="5x" />
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
