import React from 'react'
import ReactDOM from 'react-dom'

import 'whatwg-fetch'

import {Footer} from '../../common/components/footer/footer.jsx'
import {Header} from '../../common/components/header/header.jsx'
import {Resume} from '../resume/resume.jsx'

export class Home extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container sections-wrapper">
                    <div className="row">
                        <Resume/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
