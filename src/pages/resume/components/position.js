import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Divider } from '../../../components/section/section'
import styled from 'styled-components'

export const Position = (props) => {
  const position = props.position ? props.position : {}
  const responsibilities = position.responsibilities.map((responsibility, idx) => <li key={ idx }>{ responsibility }</li>)
  const achievements = position.achievements.map((achievment, idx) => <li key={ idx }>{ achievment }</li>)

  return (
    <Row>
      <Col>
        <Row>
          <Title>{ position.title }</Title><WorkDates from={ position.from } to={ position.to } />
        </Row>
        <Row>
          <Company>{ position.company }</Company><H4><FontAwesomeIcon icon={ faMapMarker } />{ position.location }</H4>
        </Row>
        <Divider />
        <H4>Responsibilities</H4>
        <ul>
          { responsibilities }
        </ul>
        <H4>Achievements</H4>
        <ul>
          { achievements }
        </ul>
      </Col>
    </Row>
  )
}

const WorkDates = (props) => {
  const from = props.from ? props.from : ''
  const to = props.to ? props.to : 'Present'

  return <H3>{ from } – { to }</H3>
}

const H3 = styled.h3`
  display: flex;

  font-family: Montserrat,sans-serif;
  font-weight: 700;
  color: #778492;
  font-size: 22px;

  margin-top: 0;
  margin-bottom: 0;
`

const Title = styled(H3)`
  flex: 1 0 0;
`

const H4 = styled.h4`
  display: flex;

  font-family: Montserrat,sans-serif;
  font-weight: 700;
  color: #778492;
  font-size: 18px;

  margin-top: 0;
  margin-bottom: 0;
`

const Company = styled(H4)`
  flex: 1 0 0;
`
