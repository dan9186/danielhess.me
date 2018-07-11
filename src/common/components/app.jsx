import React from 'react'

import {Header} from './header.jsx'
import {Body} from './body.jsx'
import {Footer} from './footer.jsx'

export class App extends React.Component {
    constructor() {
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
