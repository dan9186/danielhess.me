import React from 'react'
import { storiesOf } from '@storybook/react'
import { Logo } from './logo'

storiesOf('Components/Logo', module)
  .add('default', () => <Logo />)
  .add('sized', () => <Logo size='300px' />)
