import React from 'react'
import styled from 'styled-components'

export class TerraformIcon extends React.Component {
  render() {
    return (
      <Icon alt="Terraform" viewBox="0 0 60 60" preserveAspectRatio="xMidYMid meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.4 20.2v18.93l16.4-9.46V10.72L36.4 20.2z"></path>
        <path d="M18.2 10.72l16.4 9.48v18.93l-16.4-9.47V10.72z"></path>
        <path d="M0 .15v18.94l16.4 9.47V9.62L0 .15zm18.2 50.53l16.4 9.47V41.21l-16.4-9.47v18.94z"></path>
      </Icon>
    )
  }
}

const Icon = styled.svg`
  fill: #a1aab4;
  height: 18px;
  transform: translateY(4px);
	margin-left: 2px;
`
