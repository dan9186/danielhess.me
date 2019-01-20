import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export class Home extends React.Component {
  render() {
    return (
      <Container>
        <Section>
          <SectionInner>
            <SectionHeader>Welcome</SectionHeader>
            <hr />
            <div className="content">
              I'm in the middle of setting up my blog and other items.  In the meantime, my <Link to='/resume'>resume</Link> is available for you to view.
            </div>
          </SectionInner>
        </Section>
      </Container>
    )
  }
}

const Container = styled.div`
  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (min-width: 1400px) {
    width: 1360px;
  }

  display: flex;
  justify-content: center;

  padding-top: 30px;
  padding-bottom: 30px;
`

const Section = styled.section`
  margin-bottom: 30px;
  background: #fff;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border: 2px solid #778492;
`

const SectionInner = styled.div`
  padding: 30px;

    hr {
        border: #C2EAD2 1px solid;
    }
`

const SectionHeader = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    color: #545e69;
    font-size: 24px;
`
