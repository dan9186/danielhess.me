import React from 'react'
import styled from 'styled-components'

export class References extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Section>
                <SectionInner>
                    <h2 className="heading">References</h2>
                    <hr />
                    <div className="content">
                        Available upon request.
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
