import React from 'react'

import './github.css'

export class Github extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <section className="github section">
                <div className="section-inner">
                    <h2 className="heading">My GitHub</h2>
                    <hr />
                    <div id="github-graph" className="github-graph">
                    </div>

                    <div id="ghfeed" className="ghfeed">
                    </div>
                </div>
            </section>
        )
    }
}
