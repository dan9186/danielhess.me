import React from 'react'
import styled from 'styled-components'

import 'whatwg-fetch'

export class Navigation extends React.Component {
    render() {
        return (
            <Navbar role="navigation">
              <Nav>
                {/*this.render_link("/", 1, "Home")*/}
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
        <a href={path} eventKey={key}>{text}</a>
      </li>
    )
  }
}

const Navbar = styled.div`
  background: #32383E;
  border-top: #259d07 4px solid !important;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1030;
`

const Nav = styled.ul`
  display: flex;

  li > a {
      font-weight: bold;
  }

  .active,
  li > a:focus {
      color: #3AAA64;
  }

  .active,
  li > a:hover,
  li > a:focus {
      background: #FFFFFF;
  }
`
