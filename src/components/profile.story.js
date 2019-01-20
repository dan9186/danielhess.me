import React from 'react'
import {storiesOf} from '@storybook/react'
import {Profile} from './profile'

const globalStyle = {
  fontFamily: 'Lato',
  backgroundColor: '#cdcdcd',
}

storiesOf('Profile', module)
  .addDecorator(story => <div style={globalStyle}>{story()}</div>)
  .add('default', () => <Profile name='Daniel Hess' email='daniel@danielhess.me' username='dan9186' description='Devops Engineer' />)
