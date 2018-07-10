import React from 'react'
import {Icon} from 'react-fa'
import styled from 'styled-components'

export class SocialBadge extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className={this.props.last && "last-item"}>
                <SocialLink href={this.props.href} target="_blank">
                    <SocialIcon name={this.props.icon} />
                </SocialLink>
            </li>
        )
    }
}

const SocialLink = styled.a`
    &:hover {
        background: #259d07;
    }
`

const SocialIcon = styled(Icon)`
    font-size: 20px !important;
    padding-top: 8px;
`
