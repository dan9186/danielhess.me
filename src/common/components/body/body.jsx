import React from 'react'
import {Switch,Route} from 'react-router-dom'

import 'whatwg-fetch'

import './style.css'

import {Home} from '../../../pages/home/home.jsx'
import {Resume} from '../../../pages/resume/resume.jsx'
import {Slides} from '../../../pages/slides/slides.jsx'

export class Body extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="body-wrapper">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/resume' component={Resume}/>
                    <Route path='/slides' component={Slides}/>
                </Switch>
            </div>
        )
    }
}
