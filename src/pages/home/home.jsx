import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Section, Row, Col, SubHeading, Divider } from '../../components/section/section'

export const Home = () => (
  <Row>
    <Col>
      <Section>
        <SubHeading>Welcome</SubHeading>
        <Divider />
        <div>
          I'm in the middle of setting up my blog and other items.  In the meantime, my <Link to='/resume'>resume</Link> is available for you to view.
        </div>
      </Section>
    </Col>
  </Row>
)
