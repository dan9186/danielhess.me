import React from 'react'
import ReactDOM from 'react-dom'
import {Switch,Route,Link} from 'react-router-dom'

import 'whatwg-fetch'

import {Footer} from '../footer/footer.jsx'
import {Header} from '../header/header.jsx'

import {Resume} from '../../../pages/resume/resume.jsx'

export class App extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container sections-wrapper">
                    <div className="row">
                        <Switch>
                            <Route exact path='/' component={Resume}/>
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
