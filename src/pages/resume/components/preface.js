import React from 'react'
import styled from 'styled-components'

export const Preface = ({ preface }) => <Section>{preface}</Section>

const Section = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 8px;
  padding-bottom: 8px;
`
