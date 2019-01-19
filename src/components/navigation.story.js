import React from 'react'
import {storiesOf} from '@storybook/react'
import {Navigation} from './navigation'

const globalStyle = {
  fontFamily: 'Lato',
}

storiesOf('Navigation', module)
  .addDecorator(story => <div style={globalStyle}>{story()}</div>)
  .add('default', () => <Navigation />)
