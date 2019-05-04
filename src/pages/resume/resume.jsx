import React from 'react'
import styled from 'styled-components'

import { Row, Col, Section, SubHeading, Divider } from '../../components/section/section'

import { Accomplishments } from './resume_cards/accomplishments.jsx'
import { Education } from './resume_cards/education.jsx'
import { Info } from './resume_cards/info'
import { Preface } from './resume_cards/preface'
import { References } from './resume_cards/references'
import { ProfessionalExperience } from './resume_cards/professional_experience.jsx'
import { TechnicalExperience } from './resume_cards/technical_experience.jsx'

export const Resume = () => (
  <Row>
    <Col grow='8'>
      <Preface />
    </Col>
    <Col grow='4'>
      <Info />
      <References />
    </Col>
  </Row>
)
