import React from 'react'
import { storiesOf } from '@storybook/react'
import { StoryTheme } from '../../theme'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { Icon, Title, Subtitle } from './'

storiesOf('Components/Typography', module)
  .addDecorator(StoryTheme)
  .add('default', () => <Typography />)

const Typography = () => (
  <>
    <Title>
      <div>
        <Icon icon={faFileAlt} />A sample title with icon
      </div>
    </Title>
    <Subtitle>A subtitle</Subtitle>
  </>
)
