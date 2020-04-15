import React from 'react'
import styled from 'styled-components'

import { faUserTie } from '@fortawesome/free-solid-svg-icons'

import { Icon } from '../../../components/typography'
import { Section } from './section'
import { Subtitle } from './subtitle'

export const Info = ({ info }) => (
  <Section>
    <Subtitle>
      <Icon icon={faUserTie} />
      Info
    </Subtitle>
    <Content>
      <Pill row='1' rowEnd='2' col='1' colEnd='2'>
        Status
      </Pill>
      <Details row='1' rowEnd='2' col='2' colEnd='3'>
        {info.status}
      </Details>
      <Pill row='2' rowEnd='3' col='1' colEnd='2'>
        Location
      </Pill>
      <Details row='2' rowEnd='3' col='2' colEnd='3'>
        {info.location}
      </Details>
      <Pill row='3' rowEnd='4' col='1' colEnd='2'>
        Remote
      </Pill>
      <Details row='3' rowEnd='4' col='2' colEnd='3'>
        {info.remote}
      </Details>
    </Content>
  </Section>
)

const Content = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(0)};
  padding-left: ${({ theme }) => theme.spacing(2)};

  grid-template-columns: 70px auto;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing(1)};
  grid-row-gap: ${({ theme }) => theme.spacing(1)};
`

const Details = styled.div`
  grid-area: ${({ theme, row, rowEnd, col, colEnd }) =>
    `${row} / ${col} / ${rowEnd} / ${colEnd}`};
`

const Pill = styled.span`
  grid-area: ${({ theme, row, rowEnd, col, colEnd }) =>
    `${row} / ${col} / ${rowEnd} / ${colEnd}`};

  max-height: 22px;
  border: 1px solid ${({ theme }) => theme.palette.green[400]};
  ${({ theme }) => theme.borderRadius.all}
  padding-right: ${({ theme }) => theme.spacing(0.5)};
  padding-left: ${({ theme }) => theme.spacing(0.5)};

  color: ${({ theme }) => theme.palette.green[400]};
  text-align: center;
  font-size: 14px;
  line-height: 1.3em;
  font-weight: 500;
`
