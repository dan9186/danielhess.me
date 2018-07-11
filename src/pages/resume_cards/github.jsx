import React from 'react'
import styled from 'styled-components'

export class Github extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Section className="github">
                <SectionInner>
                    <SectionHeader>My GitHub</SectionHeader>
                    <hr />
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
