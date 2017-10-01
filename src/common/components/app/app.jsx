import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'

import {Footer} from '../footer/footer.jsx'
import {Header} from '../header/header.jsx'

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
                <div className="container sections-wrapper">
                    <div className="row">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/resume' component={Resume}/>
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
