import React from 'react'
import styled from 'styled-components'

export const SubHeading = (props) => (
  <SubHeadingContainer>
    {props.children}
  </SubHeadingContainer>
)

export const Section = (props) => (
  <SectionContainer grow={props.grow || 1}>
    {props.children}
  </SectionContainer>
)

export const Row = (props) => (
  <RowContainer>
    {props.children}
  </RowContainer>
)

export const Columns = (props) => (
  <ColumnsContainer>
    {props.children}
  </ColumnsContainer>
)

const ColumnsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const RowContainer = styled.div`
  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (min-width: 1400px) {
    width: 1360px;
  }

  display: flex;
  flex-direction: row;
  align-content: stretch;
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${props => props.grow};
  flex-basis: 0;

  padding: 30px;
  margin: 30px 15px 0px 15px;

  background: #FFFFFF;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border: 2px solid #778492;

  color: #434343;
  font-family: 'Lato', arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a {
    color: #3aaa64;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    color: #616b76;
  }

  h1, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 30px;
    color: #545e69;
    font-family: 'Montserrat', sans-serif;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 14px;
  }

  h6 {
    font-size: 10px;
  }
`

const SubHeadingContainer = styled.h2`
  margin-top: 0px;
  margin-bottom: 30px;

  font-size: 24px;
  color: #545e69;
  font-family: 'Montserrat', sans-serif;
  `

export const Divider = styled.hr`
  border: #C2EAD2 1px solid;
  margin: 0 0 20px 0;
`
