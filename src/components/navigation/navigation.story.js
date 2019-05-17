import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import { Navigation } from './navigation'

const globalStyle = {
  fontFamily: 'Lato',
}

storiesOf('Header/Navigation', module)
  .addDecorator(StoryRouter())
  .addDecorator(story => <div style={globalStyle}>{story()}</div>)
  .add('default', () => <Navigation />)
