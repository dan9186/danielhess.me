import React from 'react'
import {Col,Grid} from 'react-bootstrap'
import {Icon} from 'react-fa'

import {Accomplishments} from './cards/accomplishments.jsx'
import {Education} from './cards/education.jsx'
import {Info} from './cards/info.jsx'
import {Preface} from './cards/preface.jsx'
import {ProfessionalExperience} from './cards/professional_experience.jsx'
import {References} from './cards/references.jsx'
import {TechnicalExperience} from './cards/technical_experience.jsx'

import './style.css'

export class Resume extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <Grid className="sections-wrapper">
                <Col md={8} sm={12} xs={12} className="primary">
                    <Preface />
                    <div className="visible-xs"><Info /></div>
                    <div className="visible-xs"><Education /></div>
                    <ProfessionalExperience />
                    <TechnicalExperience />
                </Col>
                <Col md={4} sm={12} xs={12} className="secondary">
                    <div className="hidden-xs"><Info /></div>
                    <div className="hidden-xs"><Education /></div>
                    <Accomplishments />
                    <References />
                </Col>
            </Grid>
        )
    }
}
