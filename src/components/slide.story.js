import React from 'react'
import {storiesOf} from '@storybook/react'
import {Section, Columns} from './common/section'
import {Slide} from './slide'

const globalStyle = {
  fontFamily: 'Lato',
}

storiesOf('Slides', module)
  .addDecorator(story => <div style={globalStyle}>{story()}</div>)
  .add('default', () => <Slide />)
  .add('populated', () => <Slide url='http://google.com' icon='exclamation' title='watch out' description='something to keep an eye out for'/>)
  .add('in section', () => (
    <Section>
      <Columns>
        <Slide url='http://google.com' icon='exclamation' title='watch out' description='something to keep an eye out for' />
        <Slide url='http://google.com' icon='envelope' title='email' description='it is the year of our lord 2019 and you should know how to work email by now' />
        <Slide url='http://google.com' icon='code-branch' title='git-fu' description='wax on wax off' />
      </Columns>
    </Section>
  ))
