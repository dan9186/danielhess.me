import React from 'react'

import { Container, Row, Col } from '../../components/section/section'

import { Accomplishments } from './resume_cards/accomplishments'
import { Education } from './resume_cards/education'
import { Info } from './resume_cards/info'
import { Preface } from './resume_cards/preface'
import { References } from './resume_cards/references'
import { ProfessionalExperience } from './resume_cards/professional_experience'
import { TechnicalExperience } from './resume_cards/technical_experience'

export const Resume = () => (
  <Container>
    <Row>
      <Col grow='8'>
        <Preface />
        <ProfessionalExperience />
        <TechnicalExperience />
      </Col>
      <Col grow='4'>
        <Info />
        <Education />
        <Accomplishments />
        <References />
      </Col>
    </Row>
  </Container>
)
