import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export const Education = ({ education = [] }) => (
  <>
    <Subtitle>
      <Icon icon={faGraduationCap} />
      Education
    </Subtitle>
    <Section>
      {education.map(ed => (
        <School>
          <Date>
            {ed.start} - {ed.end}
          </Date>
          <Name>{ed.school}</Name>
          <Location>{ed.location}</Location>
          <Degrees>
            {ed.degrees.map(d => (
              <Degree>{d}</Degree>
            ))}
          </Degrees>
        </School>
      ))}
    </Section>
  </>
)

const Subtitle = styled.h2`
  display: flex;
  margin: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(1)};
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-top: ${props => props.theme.spacing(2)};

  color: #e3e3e3;
  font-size: 18px;
  font-weight: 400;

  border-bottom: 1px solid #515151;
`

const Section = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 8px;
  padding-bottom: 8px;
`

const School = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 50%;
`

const Icon = styled(FontAwesomeIcon)`
  color: #78cc6d;
  font-size: 24px;
  padding-left: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};
`

const Date = styled.div`
  max-width: fit-content;
  border: 1px solid #666666;
  ${props => props.theme.borderRadius.all}
  margin-top: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(0.5)};
  padding-left: ${props => props.theme.spacing(0.5)};

  color: #666666;
  font-size: 13px;
`

const Name = styled.h3`
  margin-top: ${props => props.theme.spacing(1)};
  margin-bottom: 0;

  color: #e3e3e3;
  font-size: 18px;
`

const Location = styled.div`
  margin-top: ${props => props.theme.spacing(1)};

  font-size: 13px;
`

const Degrees = styled.ul`
  margin-top: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(3)};

  font-size: 16px;
  font-weight: 500;
`

const Degree = styled.li``
