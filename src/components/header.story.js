import React from 'react'
import {storiesOf} from '@storybook/react'
import {Header} from './header'

const globalStyle = {
  fontFamily: 'Lato',
}

storiesOf('Header', module)
  .addDecorator(story => <div style={globalStyle}>{story()}</div>)
  .add('complete', () => <Header />)
