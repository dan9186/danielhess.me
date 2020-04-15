import React from 'react'
import styled from 'styled-components'

import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

import { Row, Section } from '../../components/grid'
import { Icon, Title } from '../../components/typography'

export const Blog = () => (
  <Container>
    <Title>
      <div>
        <Icon icon={faCommentDots} />
        Blog
      </div>
    </Title>
    <Row>
      <Section>
        <Content>foo</Content>
      </Section>
    </Row>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-flow: column;
  max-width: fit-content;

  color: #a2a2a2;
  font-weight: 300;
`

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(0)};
  padding-left: ${({ theme }) => theme.spacing(2)};
`
