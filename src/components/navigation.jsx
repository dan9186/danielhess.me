import React from 'react'
import styled from 'styled-components'

export class Navigation extends React.Component {
    render() {
        return (
            <Navbar role="navigation">
              <Nav>
                {this.render_link("/", 1, "Home")}
                {/*this.render_link("/resume", 2, "Resume")*/}
                {/*this.render_link("/slides", 3, "Slides")*/}
                {/*this.render_link("/blog", 4, "Blog")*/}
                {/*this.render_link("/projects", 5, "Projects")*/}
              </Nav>
            </Navbar>
        )
    }

  render_link(path, key, text) {
    return (
      <li to={path}>
        <a href={path} eventKey={key} className=''>{text}</a>
      </li>
    )
  }
}

const Navbar = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 50px;

  background: #32383E;
  border-top: #259d07 4px solid;
`

const Nav = styled.ul`
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

  li {
    display: flex;
    align-items: center;
  }

  li > a {
    color: #3AAA64;
    padding: 15px;
    font-weight: bold;
    text-decoration: none;
  }

  .active,
  li > a:hover,
  li > a:focus {
    color: #3AAA64;
    background: #FFFFFF;
    text-decoration: none;
  }
`
