import React from 'react'
import styled from 'styled-components'
import { faFileAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons'

import { Item } from './item.js'

export const Menu = () => (
  <Container>
    <Items>
      <Item text='Resume' to='/resume' icon={faFileAlt} />
      <Item text='Projects' to='/project' />
      <Item text='Blog' to='/blog' icon={faCommentDots} />
    </Items>
  </Container>
)

const Container = styled.div`
  height: 100%;
`

const Items = styled.ul`
  display: flex;
  flex-flow: row wrap;
  max-width: 72px;
  margin: 0;
  padding: 0;

  background-color: #31313a;
  ${({ theme }) => theme.borderRadius.all}

  list-style: none;
`
