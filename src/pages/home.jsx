import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {Section, Row} from '../components/common/section'

export class Home extends React.Component {
  render() {
    return (
      <Row>
        <Section>
          <h2>Welcome</h2>
          <hr />
          <div className="content">
            I'm in the middle of setting up my blog and other items.  In the meantime, my <Link to='/resume'>resume</Link> is available for you to view.
          </div>
        </Section>
      </Row>
    )
  }
}
