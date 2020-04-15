import React from 'react'
import styled from 'styled-components'
import {
  faCommentDots,
  faFileAlt,
  faFileContract,
  faHammer,
} from '@fortawesome/free-solid-svg-icons'

import { Item } from './item.js'

export const Menu = () => (
  <Container>
    <Items>
      <Item text='Resume' to='/' icon={faFileAlt} />
      <Item text='Hire Me' to='/hireme' icon={faFileContract} />
      <Item text='Projects' to='/projects' icon={faHammer} />
      <Item text='Blog' to='/blog' icon={faCommentDots} />
    </Items>
  </Container>
)

const Container = styled.div`
  z-index: 2;

  @media ${({ theme }) => theme.media.width.md} {
    margin-right: ${({ theme }) => theme.spacing(1)};
  }
`

const Items = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;

  background-color: #31313a;
  ${({ theme }) => theme.borderRadius.all}

  list-style: none;

  @media ${({ theme }) => theme.media.width.md} {
    max-width: 72px;
  }
`
