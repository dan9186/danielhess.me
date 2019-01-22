import React from 'react'
import styled from 'styled-components'

import {TerraformIcon} from './icons/terraform'
import {ReactIcon} from './icons/react'
import {GCPIcon} from './icons/gcp'

export class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      version: this.props.version || '0.0.1',
      commit: this.props.commit ? this.props.commit.slice(0,7) : 'dev',
    }
  }

  render() {
    return (
      <Container>
        <SmallText>© All rights reserved. Daniel Hess 2017</SmallText>
        <SmallText>v{this.state.version}-{this.state.commit} powered by <ReactIcon />, runs on <GCPIcon />, deployed with <TerraformIcon /></SmallText>
      </Container>
    )
  }
}

const Container = styled.footer`
  background: #32383e;
  color: #a1aab4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-top: #778492 0.4em solid;
`

const SmallText = styled.small`
  display: flex;
  line-height: 1.6;
  font-size: 14px;
`
