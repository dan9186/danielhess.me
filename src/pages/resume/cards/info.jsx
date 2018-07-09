import React from 'react'
import {Icon} from 'react-fa'

import './info.css'

export class Info extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <section className="info section">
                <div className="section-inner">
                    <h2 className="heading">Info</h2>
                    <hr />
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><Icon name='map-marker' /><span className="sr-only">Location:</span>Portland, OR</li>
                            <li><Icon name='envelope-o' /><span className="sr-only">Email:</span><a href="#">daniel@danielhess.me</a></li>
                            <li><Icon name='github' /><span className="sr-only">Github:</span><a href="#">github.com/dan9186</a></li>
                            <li><Icon name='twitter' /><span className="sr-only">Twitter:</span><a href="#">@dan9186</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
