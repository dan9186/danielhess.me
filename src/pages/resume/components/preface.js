import React from 'react'
import styled from 'styled-components'

import { Section } from './section'

export const Preface = ({ preface }) => (
  <Section>
    <Content>{preface}</Content>
  </Section>
)

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(2)};
`
