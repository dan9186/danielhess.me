import React from 'react'
import {Link} from 'react-router-dom'
import {Col,Grid} from 'react-bootstrap'
import styled from 'styled-components'

export class Home extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <SectionWrapper>
                <Col md={12} sm={12} xs={12}>
                    <Section>
                        <SectionInner>
                            <SectionHeader>Welcome</SectionHeader>
                            <hr />
                            <div className="content">
                                I'm in the middle of setting up my blog and other items.  In the meantime, my <Link to='/resume'>resume</Link> is available for you to view.
                            </div>
                        </SectionInner>
                    </Section>
                </Col>
            </SectionWrapper>
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
