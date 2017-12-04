import React from 'react'
import {Icon} from 'react-fa'

import './education.css'

export class Education extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <section className="education section">
                <div className="section-inner">
                    <h2 className="heading">Education</h2>
                    <hr />
                    <div className="content">
                        <div className="item">
                            <h3 className="title"><Icon name='graduation-cap' /> B.S. in Computer Engineering</h3>
                            <h3 className="title"><Icon name='graduation-cap' /> B.S. in Computer Science</h3>
                            <h3 className="title"><Icon name='graduation-cap' /> Minor in Mathematics</h3>
                            <h4 className="university">Christian Brothers University<br/>Memphis, TN <span className="date-range">(August 2005 – May 2009)</span></h4>
                        </div>
                        <div className="item">
                        </div>
                        <div className="item">
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
