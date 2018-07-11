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
                    <section className="section">
                        <div className="section-inner">
                            <h2 className="heading">Welcome</h2>
                            <hr />
                            <div className="content">
                                I'm in the middle of setting up my blog and other items.  In the meantime, my <Link to='/resume'>resume</Link> is available for you to view.
                            </div>
                        </div>
                    </section>
                </Col>
            </SectionWrapper>
        )
    }
}

const SectionWrapper = styled(Grid)`
	padding-top: 30px;
	padding-bottom: 30px;
`
