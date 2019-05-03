import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Section, Row, SubHeading, Divider } from '../../components/common/section'

export const Home = () => (
  <Row>
    <Section>
      <SubHeading>Welcome</SubHeading>
      <Divider />
      <div>
        I'm in the middle of setting up my blog and other items.  In the meantime, my <Link to='/resume'>resume</Link> is available for you to view.
      </div>
    </Section>
  </Row>
)
