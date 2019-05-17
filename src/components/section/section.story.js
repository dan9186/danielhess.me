import React from 'react'
import { storiesOf } from '@storybook/react'
import { Section, Row } from './section'
import { Typography } from './typography'

storiesOf('Common/Sections', module)
  .add('default', () => <Section />)
  .add('styles', () => (
    <Row>
      <Section><Typography /></Section>
    </Row>
  ))

storiesOf('Common/Sections/Columns', module)
  .add('default spacing', () => (
    <Row>
      <Section />
      <Section />
    </Row>
  ))
  .add('differing spacing', () => (
    <Row>
      <Section grow='3'/>
      <Section />
    </Row>
  ))

storiesOf('Common/Sections/Rows', module)
  .add('default spacing', () => (
    <React.Fragment>
      <Row>
        <Section />
      </Row>
      <Row>
        <Section />
      </Row>
      <Row>
        <Section />
      </Row>
      <Row>
        <Section />
      </Row>
    </React.Fragment>
  ))
  .add('differing spacing', () => (
    <React.Fragment>
      <Row>
        <Section grow='3' />
        <Section />
      </Row>
      <Row>
        <Section />
      </Row>
      <Row>
        <Section grow='2' />
        <Section />
        <Section grow='2' />
      </Row>
    </React.Fragment>
  ))
