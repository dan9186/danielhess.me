import React from 'react'
import {Navbar,Nav,NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {bootstrapUtils} from 'react-bootstrap/lib/utils'

import 'whatwg-fetch'

import './style.css'

bootstrapUtils.addStyle(Navbar, 'custom')

export class Navigation extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <Navbar fixedTop bsStyle="custom" collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
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
            </Navbar>
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
