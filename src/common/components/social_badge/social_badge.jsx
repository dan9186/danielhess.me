import React from 'react'
import ReactDOM from 'react-dom'

import 'whatwg-fetch'

export class SocialBadge extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className={this.props.last && "last-item"}><a href={this.props.href} target="_blank"><i className={"fa fa-" + this.props.icon}></i></a></li>
        )
    }
}
