import React from 'react'
import { storiesOf } from '@storybook/react'
import { StoryTheme } from '../../theme'
import { Card } from './card'

storiesOf('Components/Card', module)
  .addDecorator(StoryTheme)
  .add('default', () => <Card />)
