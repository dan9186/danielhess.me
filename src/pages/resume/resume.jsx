import React from 'react'
import styled from 'styled-components'

import { Row, Section, SubHeading, Divider } from '../../components/section/section'

import { Accomplishments } from './resume_cards/accomplishments.jsx'
import { Education } from './resume_cards/education.jsx'
import { Info } from './resume_cards/info.jsx'
import { ProfessionalExperience } from './resume_cards/professional_experience.jsx'
import { TechnicalExperience } from './resume_cards/technical_experience.jsx'

export const Resume = () => (
  <Row>
    <Section grow='8'>
      <SubHeading>Preface</SubHeading>
      <Divider />
      <div>
        I'm a motivated and self directed individual with a passion for learning anything new.  My skillset helps me to provide a fully cloud native software lifecycle, from design and development, to testing and deployment.  Strong communication skills and being very familiar with Agile software practices, I am capable of interacting and fitting into almost any team.
      </div>
    </Section>
    <Section grow='4'>
      <SubHeading>References</SubHeading>
      <Divider />
      <div>Available upon request.</div>
    </Section>
  </Row>
)
