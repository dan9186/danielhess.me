import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export const Education = () => (
  <Section className="education">
    <SectionInner>
      <SectionHeader>Education</SectionHeader>
      <hr />
      <SectionContent>
        <Degrees>
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
            Memphis, TN <span className="date-range">(August 2005 – May 2009)</span>
          </University>
        </Degrees>
      </SectionContent>
    </SectionInner>
  </Section>
)

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

const Degrees = styled.div`
  margin-bottom: 30px;
`

const Degree = styled.h3`
  font-size: 16px !important;
  margin-top: 0;
`

const University = styled.h4`
  font-family: "Lato", arial, sans-serif;
  font-size: 13px;
  color: #999;
  font-weight: 600;
  padding-left: 25px;
`
