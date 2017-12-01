import React from 'react'
import {Switch,Route} from 'react-router-dom'

import {Header} from '../header/header.jsx'
import {Body} from '../body/body.jsx'
import {Footer} from '../footer/footer.jsx'

import {Home} from '../../../pages/home/home.jsx'
import {Resume} from '../../../pages/resume/resume.jsx'

export class App extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}
