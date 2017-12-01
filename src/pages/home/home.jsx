import React from 'react'
import {Link} from 'react-router-dom'

export class Home extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="container sections-wrapper">
                <div className="primary col-md-12 col-sm-12 col-xs-12">
                    <section className="section">
                        <div className="section-inner">
                            <h2 className="heading">Welcome</h2>
                            <hr />
                            <div className="content">
                                I'm in the middle of setting up my blog and other items.  In the meantime, my <Link to='/resume'>resume</Link> is available for you to view.
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
