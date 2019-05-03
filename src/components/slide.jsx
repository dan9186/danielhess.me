import React from 'react'
import styled from 'styled-components'

import {library, findIconDefinition} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

import {Navigation} from './navigation'

export const Slide = (props) => {
  library.add(fas)

  const url = props.url || '#'
  const icon = findIconDefinition({prefix: 'fas', iconName: (props.icon || 'exclamation-triangle')})
  const title = props.title
  const description = props.description

  return (
    <Container>
      <a href={url} target="_blank">
        <Icon icon={icon} size="5x" />
        <Title>{title}</Title>
      </a>
      <Description>{description}</Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  justify-content: center;
  align-content: space-between;

  max-width: 250px;
  background: #dfdfdf;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;

  text-align: center;
  padding: 15px;

  a:hover {
    text-decoration: none;
  }
`

const Icon = styled(FontAwesomeIcon)`
  flex-grow: 1;
  flex-basis: 0;

  margin-bottom: 5px;
`

const Title = styled.h3`
  flex-grow: 1;
  flex-basis: 0;

  text-transform: capitalize;
`

const Description = styled.p`
  flex-grow: 1;
  flex-basis: 0;

  margin-top: -15px;
`
