import React from 'react'
import {Navbar,Nav,NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {bootstrapUtils} from 'react-bootstrap/lib/utils'
import styled from 'styled-components'

import 'whatwg-fetch'

import './style.css'

bootstrapUtils.addStyle(Navbar, 'custom')

export class Navigation extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <StyledNavbar fixedTop bsStyle="custom" collapseOnSelect>
                <Navbar.Header>
                    <StyledNavbarToggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {this.render_link("/", 1, "Home")}
                        {this.render_link("/resume", 2, "Resume")}
                        {this.render_link("/slides", 3, "Slides")}
                        {/*this.render_link("/blog", 4, "Blog")*/}
                        {/*this.render_link("/projects", 5, "Projects")*/}
                    </Nav>
                </Navbar.Collapse>
            </StyledNavbar>
        )
    }

    render_link(path, key, text) {
        return (
            <LinkContainer to={path} exact activeClassName="active">
                <NavItem href={path} eventKey={key}>{text}</NavItem>
            </LinkContainer>
        )
    }
}

const StyledNavbar = styled(Navbar)`
	background: #32383E;
	border-top: #259d07 4px solid !important;
`

const StyledNavbarToggle = styled(Navbar.Toggle)`
	background: #FFFFFF !important;
`
