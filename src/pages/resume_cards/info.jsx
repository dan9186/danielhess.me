import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

export class Info extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Section>
                <SectionInner>
                    <SectionHeader>Info</SectionHeader>
                    <hr />
                    <SectionContent>
                        <InfoList>
                            <InfoItem><InfoIcon icon={faMapMarker} /><span className="sr-only">Location:</span>Portland, OR</InfoItem>
                            <InfoItem><InfoIcon icon={faEnvelope} /><span className="sr-only">Email:</span><a href="#">daniel@danielhess.me</a></InfoItem>
                            <InfoItem><InfoIcon icon={faGithub} /><span className="sr-only">Github:</span><a href="#">github.com/dan9186</a></InfoItem>
                            <InfoItem><InfoIcon icon={faTwitter} /><span className="sr-only">Twitter:</span><a href="#">@dan9186</a></InfoItem>
                        </InfoList>
                    </SectionContent>
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

const SectionContent = styled.div`
    h3 {
        font-size: 22px;
    }

    hr {
        border: #C2EAD2 1px solid;
    }
`

const InfoList = styled.ul`
	margin-bottom: 0;
	list-style:none;
    padding-left: 0;
`

const InfoItem = styled.li`
	margin-bottom: 0.2em;

    &:last-child {
        margin-bottom: 0;
    }
`

const InfoIcon = styled(FontAwesomeIcon)`
	margin-right: 15px;
	color: #778492;
`
