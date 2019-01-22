import React from 'react'
import styled from 'styled-components'

import {library, findIconDefinition} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

import {Navigation} from './navigation'

export class Slide extends React.Component {
  constructor(props) {
    super(props)

    library.add(fas)

    this.state = {
      url: this.props.url || '#',
      icon: findIconDefinition({prefix: 'fas', iconName: (this.props.icon || 'exclamation-triangle')}),
      title: this.props.title,
      description: this.props.description,
    }
  }

  render() {
    return (
      <Container>
        <a href={this.state.url} target="_blank">
          <Icon icon={this.state.icon} size="5x" />
          <Title>{this.state.title}</Title>
        </a>
        <Description>{this.state.description}</Description>
      </Container>
    )
  }
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
