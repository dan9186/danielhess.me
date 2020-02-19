import React from 'react'
import { storiesOf } from '@storybook/react'
import { StoryTheme } from '../../theme'
import { Loading } from './loading'

storiesOf('Components/Loading', module)
  .addDecorator(StoryTheme)
  .add('default', () => <Loading />)
