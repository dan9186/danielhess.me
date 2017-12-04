import React from 'react'

export class Preface extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <section className="section">
                <div className="section-inner">
                    <h2 className="heading">About Me</h2>
                    <hr />
                    <div className="content">
                        I'm a motivated and self directed individual with a passion for learning anything new.  My skillset helps me to provide a fully cloud native software lifecycle, from design and development, to testing and deployment.  Strong communication skills and being very familiar with Agile software practices, I am capable of interacting and fitting into almost any team.
                    </div>
                </div>
            </section>
        )
    }
}
