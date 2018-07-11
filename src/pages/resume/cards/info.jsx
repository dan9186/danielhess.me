import React from 'react'
import {Icon} from 'react-fa'
import styled from 'styled-components'

import './info.css'

export class Info extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Section className="info">
                <SectionInner>
                    <h2 className="heading">Info</h2>
                    <hr />
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><Icon name='map-marker' /><span className="sr-only">Location:</span>Portland, OR</li>
                            <li><Icon name='envelope-o' /><span className="sr-only">Email:</span><a href="#">daniel@danielhess.me</a></li>
                            <li><Icon name='github' /><span className="sr-only">Github:</span><a href="#">github.com/dan9186</a></li>
                            <li><Icon name='twitter' /><span className="sr-only">Twitter:</span><a href="#">@dan9186</a></li>
                        </ul>
                    </div>
                </SectionInner>
            </Section>
        )
    }
}

const Section = styled.section`
	margin-bottom: 30px;
	background: #fff;
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border: 2px solid #778492;
`

const SectionInner = styled.div`
	padding: 30px;
`
