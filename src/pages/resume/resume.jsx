import React from 'react'
import {Col,Grid} from 'react-bootstrap'
import styled from 'styled-components'

import {Accomplishments} from './cards/accomplishments.jsx'
import {Education} from './cards/education.jsx'
import {Info} from './cards/info.jsx'
import {Preface} from './cards/preface.jsx'
import {ProfessionalExperience} from './cards/professional_experience.jsx'
import {References} from './cards/references.jsx'
import {TechnicalExperience} from './cards/technical_experience.jsx'

import './style.css'

export class Resume extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <SectionWrapper>
                <Col md={8} sm={12} xs={12}>
                    <Preface />
                    <div className="visible-xs"><Info /></div>
                    <div className="visible-xs"><Education /></div>
                    <ProfessionalExperience />
                    <TechnicalExperience />
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <div className="hidden-xs"><Info /></div>
                    <div className="hidden-xs"><Education /></div>
                    <Accomplishments />
                    <References />
                </Col>
            </SectionWrapper>
        )
    }
}

const SectionWrapper = styled(Grid)`
	padding-top: 30px;
	padding-bottom: 30px;
`
