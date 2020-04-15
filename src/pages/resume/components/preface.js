import React from 'react'
import styled from 'styled-components'

import { Section } from '../../../components/grid'

export const Preface = ({ preface }) => (
  <Section>
    <Content>{preface}</Content>
  </Section>
)

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(0)};
  padding-left: ${({ theme }) => theme.spacing(2)};
`
