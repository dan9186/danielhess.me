import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'

export class Body extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <main role="main" id="main">
                <div className="container">
                    <section id="home" className="tab-pane fade in active">
                        <article className="home-content">
                            <header role="home-title">
                                <h2>Dedicated to <span id="highlighted">Devops</span></h2>
                            </header>
                            <p>I'm sorry, my website is not fully completed. I'll hopefully<br />
                            have more here soon.</p>
                            <p></p>
                        </article>
                    </section>
                </div>
            </main>
        )
    }
}
