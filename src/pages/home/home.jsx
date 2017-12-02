import React from 'react'
import {Link} from 'react-router-dom'
import {Col,Grid} from 'react-bootstrap'

export class Home extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <Grid className="sections-wrapper">
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
            </Grid>
        )
    }
}
