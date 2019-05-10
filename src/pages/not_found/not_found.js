import React from 'react'
import { Container, Col, Divider, Row, Section } from '../../components/section/section'
import styled from 'styled-components'

export const NotFound = () => (
  <Container>
    <Row>
      <Col>
        <Section>
          <BigNotFound>
            404
          </BigNotFound>
          <Divider />
          <Message>
            You have found an edge of my site. Apologies if you were directed here, and I'll be working to fix it.
          </Message>
        </Section>
      </Col>
    </Row>
  </Container>
)

const BigNotFound = styled.h1`
  display: flex;
  justify-content: center;

  margin-top: 25px;
  margin-bottom: 10px;

  color: #545e69;
  font-size: 5em;
  font-family: 'Montserrat', sans-serif;
`

const Message = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 30px;

  font-family: 'Montserrat', sans-serif;
`
