import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Icon } from './icon'

export const Item = ({ text, to, icon }) => (
  <Container to={to}>
    <ListItem>
      <Icon icon={icon} />
      <Text>{text}</Text>
    </ListItem>
  </Container>
)

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  height: 69px;
  width: 72px;

  text-decoration: none;
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

  color: ${({ theme }) => theme.palette.grey[300]};
  font-size: 11px;
  text-transform: uppercase;
`
