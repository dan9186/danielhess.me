import React from 'react'
import styled from 'styled-components'

import { Row, Col, Divider } from '../../../components/section/section'
import { Skill } from './skill'

export const SkillGroup = (props) => {
  const keys = Object.keys(props.subject)
  const subject = props.subject
  const cols = props.cols && props.cols > 1 ? props.cols : 1

  const columns = []
  for (let i = 0; i < cols; i++) {
    columns.push(
      <Col>
        <Skills>
          { keys.slice(i * keys.length / cols, (i + 1) * keys.length / cols).map((key) => <Skill name={ key } level={ subject[key] } />) }
        </Skills>
      </Col>
    )
  }

  return (
    <Col grow={ cols }>
      <Name>{props.name}</Name>
      <Divider />
      <Row>
        { columns }
      </Row>
    </Col>
  )
}

const Skills = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`

const Name = styled.h4`
  text-transform: capitalize;
  font-family: Montserrat,sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #778492;

  margin-top: 10px;
  margin-bottom: 10px;
`
