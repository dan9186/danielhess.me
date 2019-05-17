import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Navigation = () => (
  <Navbar role="navigation">
    <Nav>
      <StyledNavLink exact to='/'>Home</StyledNavLink>
      <StyledNavLink to='/resume'>Resume</StyledNavLink>
      <StyledNavLink to='/slides'>Slides</StyledNavLink>
      {/* <StyledNavLink to='/blog'>Blog</StyledNavLink> */}
      {/* <StyledNavLink to='/projects'>Projects</StyledNavLink> */}
    </Nav>
  </Navbar>
)

const Navbar = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 50px;

  background: #32383E;
  border-top: #259d07 4px solid;
`

const Nav = styled.div`
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

  margin: 0;
  padding-left: 0;
  list-style: none;
`

const StyledNavLink = styled(NavLink)`
  color: #3AAA64;
  font-weight: bold;
  text-decoration: none;

  padding: 15px;

  transition: background 0.5s;

  &.active,
  &:focus,
  &:hover {
    color: #3AAA64;
    text-decoration: none;

    background: #FFFFFF;
  }
`
