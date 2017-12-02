import React from 'react'
import {Grid} from 'react-bootstrap'

import './style.css'

export class Footer extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <footer className="footer">
                <Grid className="text-center">
                    <small className="copyright">© All rights reserved. Daniel Hess 2017</small>
                </Grid>
            </footer>
        )
    }
}
