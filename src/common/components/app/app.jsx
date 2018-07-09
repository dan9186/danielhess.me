import React from 'react'

import {Header} from '../header/header.jsx'
import {Body} from '../body/body.jsx'
import {Footer} from '../footer/footer.jsx'

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
