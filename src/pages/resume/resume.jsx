import React from 'react'
import styled from 'styled-components'

import { Accomplishments } from './resume_cards/accomplishments.jsx'
import { Education } from './resume_cards/education.jsx'
import { Info } from './resume_cards/info.jsx'
import { Preface } from './resume_cards/preface.jsx'
import { ProfessionalExperience } from './resume_cards/professional_experience.jsx'
import { References } from './resume_cards/references.jsx'
import { TechnicalExperience } from './resume_cards/technical_experience.jsx'

export const Resume = () => (
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

const SectionWrapper = styled(Grid)`
  padding-top: 30px;
  padding-bottom: 30px;
`

const Col = styled.div`
`

const Row = styled.div`
`
