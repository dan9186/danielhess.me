import React from 'react'
import { Link } from 'react-router-dom'

import { Section, Row, Col, Container, SubHeading, Divider } from '../../components/section/section'

export const Home = () => (
  <Container>
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
  </Container>
)
