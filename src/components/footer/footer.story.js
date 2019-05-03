import React from 'react'
import {storiesOf} from '@storybook/react'
import {Footer} from './footer'

const globalStyle = {
  fontFamily: 'Lato',
}

storiesOf('Footer', module)
  .addDecorator(story => <div style={globalStyle}>{story()}</div>)
  .add('default', () => <Footer />)
  .add('with build info', () => <Footer version='1.0.0' commit='f09e0bb17e2a447ca75508e70cb4f2de'/>)
