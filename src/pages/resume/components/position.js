import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Divider } from '../../../components/section/section'
import styled from 'styled-components'

export const Position = (props) => {
  const [collapsedResp, setCollapsedResp] = useState(props.position.collapsed === undefined || props.position.collapsed)
  const [collapsedAch, setCollapsedAch] = useState(props.position.collapsed === undefined || props.position.collapsed)

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
          <Company>{ position.company }</Company><H4><MapMarker icon={ faMapMarker } />{ position.location }</H4>
        </Row>
        <Divider />
        <Row>
          <Dropdown collapsed={ collapsedResp } onClick={ () => setCollapsedResp(!collapsedResp) } icon={ faChevronCircleRight } />
          <Col>
            <H4>Responsibilities</H4>
            <Collapse collapsed={ collapsedResp }>
              <ul>
                { responsibilities }
              </ul>
            </Collapse>
          </Col>
        </Row>
        <Row>
          <Dropdown collapsed={ collapsedAch } onClick={ () => setCollapsedAch(!collapsedAch) } icon={ faChevronCircleRight } />
          <Col>
            <H4>Achievements</H4>
            <Collapse collapsed={ collapsedAch }>
              <ul>
                { achievements }
              </ul>
            </Collapse>
          </Col>
        </Row>
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

const Dropdown = styled(FontAwesomeIcon)`
  color: #778492;
  font-size: 20px;

  ${props => props.collapsed ? null : 'transform: rotate(90deg);'}
  transition: all 0.5s ease-in-out;

  margin-right: 8px;
`

const Collapse = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;

  height: auto;
  max-height: ${props => props.collapsed ? `0` : `2000px`};
  overflow: hidden;

  transition: max-height 0.7s;
`

const Company = styled(H4)`
  flex: 1 0 0;
`

const MapMarker = styled(FontAwesomeIcon)`
  margin-right: 8px;
`
