import React from 'react'
import {Switch,Route} from 'react-router-dom'

import 'whatwg-fetch'

import './style.css'

import {Home} from '../../../pages/home/home.jsx'
import {Resume} from '../../../pages/resume/resume.jsx'

export class Body extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="body-wrapper">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/resume' component={Resume}/>
                </Switch>
            </div>
        )
    }
}
