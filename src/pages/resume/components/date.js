import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

export const Date = ({ start, end }) => {
  const active = end.toLowerCase() === 'present'

  const stop = active ? moment.now() : end
  const durr = moment.duration(moment(stop).diff(moment(start)))
  const years = durr.years()
  const months = durr.months()

  const timeSpent = years > 0 ? `${years}y ${months}mo` : `${months}mo`

  return (
    <Container>
      <Pill active={active}>
        {start} - {end}
      </Pill>
      <Pill active={active}>{timeSpent}</Pill>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const Pill = styled.div`
  max-width: fit-content;
  border: 1px solid ${props =>
    props.active
      ? props.theme.palette.green[400]
      : props.theme.palette.grey[500]};
  ${props => props.theme.borderRadius.all}
  margin-top: ${props => props.theme.spacing(1)};
  margin-right: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(0.5)};
  padding-left: ${props => props.theme.spacing(0.5)};

  color: ${props =>
    props.active
      ? props.theme.palette.green[400]
      : props.theme.palette.grey[500]};
  font-size: 13px;
`
