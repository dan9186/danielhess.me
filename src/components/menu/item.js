import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { Icon } from './icon'

export const Item = ({ text, to, icon }) => {
  const location = useLocation()
  const active = location.pathname === to

  return (
    <Container to={to} active={active}>
      <ListItem>
        <Icon icon={icon} />
        <Text>{text}</Text>
      </ListItem>
    </Container>
  )
}

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  height: 69px;
  width: 72px;

  text-decoration: none;
  color: ${({ theme, active }) =>
    active ? theme.palette.green[400] : theme.palette.grey[300]};
  transition: color 0.4s ease;

  &:hover {
    color: ${({ theme }) => theme.palette.green[400]};
  }
`

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  flex: 1;
  margin: 0;
  padding: 0;
`

const Text = styled.span`
  width: 100%;
  text-align: center;

  font-size: 11px;
  text-transform: uppercase;
`
