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
                        <LinkContainer to='/' exact activeClassName="active">
                            <NavItem href='/' eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to='/resume' activeClassName="active">
                            <NavItem href='/resume' eventKey={2}>Resume</NavItem>
                        </LinkContainer>
                        <LinkContainer to='/blog' activeClassName="active">
                            <NavItem href='/blog' eventKey={3}>Blog</NavItem>
                        </LinkContainer>
                        <LinkContainer to='/projects' activeClassName="active">
                            <NavItem href='/projects' eventKey={4}>Projects</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
