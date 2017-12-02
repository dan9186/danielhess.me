import React from 'react'
import {Icon} from 'react-fa'

export class SocialBadge extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className={this.props.last && "last-item"}><a href={this.props.href} target="_blank"><Icon name={this.props.icon} /></a></li>
        )
    }
}
