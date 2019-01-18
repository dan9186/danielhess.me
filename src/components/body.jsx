import React from 'react'
import {Switch,Route} from 'react-router-dom'
import styled from 'styled-components'

import {Home} from './../../pages/home.jsx'
import {Resume} from './../../pages/resume.jsx'
import {Slides} from './../../pages/slides.jsx'

export class Body extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <BodyWrapper>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/resume' component={Resume}/>
                    <Route path='/slides' component={Slides}/>
                </Switch>
            </BodyWrapper>
        )
    }
}

const BodyWrapper = styled.div`
	min-height: 596px;
`
