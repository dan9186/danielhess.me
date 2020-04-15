import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import { StoryTheme } from '../../theme'
import { Menu } from './'

storiesOf('Components/Menu', module)
  .addDecorator(StoryRouter())
  .addDecorator(StoryTheme)
  .add('default', () => <Menu />)
