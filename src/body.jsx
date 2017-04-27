import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import {Resume} from './resume.jsx'

export class Body extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="container sections-wrapper">
                <div className="row">
                    <Resume />
                </div>
            </div>
        )
    }
}
