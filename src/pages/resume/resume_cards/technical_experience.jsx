import React from 'react'
import styled from 'styled-components'

import './technical_experience.css'

export class TechnicalExperience extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Section className="tech-experience">
                <SectionInner>
                    <SectionHeader>Technical Experience</SectionHeader>
                    <hr />
                    <SectionContent>
                        <Row>
                            <Col md={8}>
                                <h4>Languages</h4>
                                <hr />
                                <Row>
                                    <Col md={6}>
                                        <ul className="skills">
                                            { this.skill("Golang", 3) }
                                            { this.skill("Java", 1) }
                                            { this.skill("JavaScript", 1) }
                                            { this.skill("Make", 2) }
                                            { this.skill("PHP", 1) }
                                            { this.skill("Perl", 1) }
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className="skills">
                                            { this.skill("Python", 1) }
                                            { this.skill("Ruby", 2) }
                                            { this.skill("SQL", 3) }
                                            { this.skill("Shell Scripts", 3) }
                                            { this.skill("VimL", 1) }
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <h4>Frameworks</h4>
                                <hr />
                                <Row>
                                    <Col md={12}>
                                        <ul className="skills">
                                            { this.skill("Cucumber", 3) }
                                            { this.skill("Goblin/Gomega", 3) }
                                            { this.skill("Gorilla (Mux)", 3) }
                                            { this.skill("Sinatra", 2) }
                                            { this.skill("Swagger", 2) }
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <h4>Systems</h4>
                                <hr />
                                <Row>
                                    <Col md={12}>
                                        <ul className="skills">
                                            { this.skill("CentOS", 3) }
                                            { this.skill("Red Hat Enterprise Linux", 3) }
                                            { this.skill("Ubuntu", 3) }
                                            { this.skill("Debian", 3) }
                                            { this.skill("Mac OS X", 3) }
                                            { this.skill("Windows", 2) }
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={8}>
                                <h4>Infrastructure</h4>
                                <hr />
                                <Row>
                                    <Col md={6}>
                                        <ul className="skills">
                                            { this.skill("Amazon Web Services", 3) }
                                            { this.skill("ApolloMQ", 2) }
                                            { this.skill("Digitial Ocean", 2) }
                                            { this.skill("Google Cloud Platform", 3) }
                                            { this.skill("Kubernetes", 2) }
                                            { this.skill("Postgres", 3) }
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className="skills">
                                            { this.skill("RabbitMQ", 3) }
                                            { this.skill("Redis", 2) }
                                            { this.skill("etcd", 3) }
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <h4>Tools</h4>
                                <hr />
                                <Row>
                                    <Col md={4}>
                                        <ul className="skills">
                                            { this.skill("Ansible", 3) }
                                            { this.skill("Chef", 1) }
                                            { this.skill("CircleCI", 2) }
                                            { this.skill("Docker", 3) }
                                            { this.skill("Drone", 1) }
                                        </ul>
                                    </Col>
                                    <Col md={4}>
                                        <ul className="skills">
                                            { this.skill("Git", 3) }
                                            { this.skill("Graphite/Graphana", 3) }
                                            { this.skill("Jenkins", 2) }
                                            { this.skill("Packer", 3) }
                                            { this.skill("RVM", 3) }
                                        </ul>
                                    </Col>
                                    <Col md={4}>
                                        <ul className="skills">
                                            { this.skill("TeamCity", 2) }
                                            { this.skill("TravisCI", 3) }
                                            { this.skill("Vagrant", 3) }
                                            { this.skill("Vim/Vi", 3) }
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </SectionContent>
                </SectionInner>
            </Section>
        )
    }

    skill(name, level) {
        return (
            <li><h5>{name}</h5>
                { this.skill_level(level) }
            </li>
        )
    }

    skill_level(level) {
        switch(level) {
            case 1: return (
                <div>
                    <span></span>
                    <span className="transparent"></span>
                    <span className="transparent"></span>
                </div>
            )
            case 2: return (
                <div>
                    <span></span>
                    <span></span>
                    <span className="transparent"></span>
                </div>
            )
            case 3: return (
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )
            default: return (
                <div>
                    <span className="transparent"></span>
                    <span className="transparent"></span>
                    <span className="transparent"></span>
                </div>
            )
        }
    }
}

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

const SectionContent = styled.div`
    h3 {
        font-size: 22px;
    }

    hr {
        border: #C2EAD2 1px solid;
    }
`

const Col = styled.div`
`

const Row = styled.div`
`
