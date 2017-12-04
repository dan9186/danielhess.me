import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import './style.css'

export class Footer extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <footer className="footer">
                <Grid>
                    <Row>
                        <Col md={4} mdOffset={4} sm={4} smOffset={4} className="text-center">
                            <small className="copyright">© All rights reserved. Daniel Hess 2017</small>
                        </Col>
                        <Col md={4} sm={4} className="text-right">
                            <small>Powered by GCP, Deployed with Terraform</small>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}
