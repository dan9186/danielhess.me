import React from 'react'
import {Icon} from 'react-fa'
import styled from 'styled-components'

import './education.css'

export class Education extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Section className="education">
                <SectionInner>
                    <SectionHeader>Education</SectionHeader>
                    <hr />
                    <div className="content">
                        <div className="item">
                            <h3 className="title"><Icon name='graduation-cap' /> B.S. in Computer Engineering</h3>
                            <h3 className="title"><Icon name='graduation-cap' /> B.S. in Computer Science</h3>
                            <h3 className="title"><Icon name='graduation-cap' /> Minor in Mathematics</h3>
                            <h4 className="university">Christian Brothers University<br/>Memphis, TN <span className="date-range">(August 2005 – May 2009)</span></h4>
                        </div>
                        <div className="item">
                        </div>
                        <div className="item">
                        </div>
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

    hr {
        border: #C2EAD2 1px solid;
    }
`

const SectionHeader = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    color: #545e69;
    font-size: 24px;
`
