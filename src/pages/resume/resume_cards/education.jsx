import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Section, Divider, SubHeading } from '../../../components/section/section'
import styled from 'styled-components'

export const Education = () => (
  <Section>
    <SubHeading>Education</SubHeading>
    <Divider />
    <div>
      <Degree>
        <FontAwesomeIcon icon={faGraduationCap} /> B.S. in Computer Engineering
      </Degree>
      <Degree>
        <FontAwesomeIcon icon={faGraduationCap} /> B.S. in Computer Science
      </Degree>
      <Degree>
        <FontAwesomeIcon icon={faGraduationCap} /> Minor in Mathematics
      </Degree>
      <University>
        Christian Brothers University
        <br/>
        Memphis, TN <span>(August 2005 – May 2009)</span>
      </University>
    </div>
  </Section>
)

const Degree = styled.h3`
  font-family: Montserrat,sans-serif;
  font-weight: 700;
  color: #778492;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 10px;
`

const University = styled.h4`
  font-family: "Lato", arial, sans-serif;
  font-size: 13px;
  color: #999;
  font-weight: 600;
  padding-left: 25px;
  margin-top: 0;
  margin-bottom: 0;
`
