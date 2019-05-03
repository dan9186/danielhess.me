import React from 'react'
import styled from 'styled-components'

export const Preface = () => (
  <Section>
    <SectionInner>
      <SectionHeader>Preface</SectionHeader>
      <hr />
      <SectionContent>
        I'm a motivated and self directed individual with a passion for learning anything new.  My skillset helps me to provide a fully cloud native software lifecycle, from design and development, to testing and deployment.  Strong communication skills and being very familiar with Agile software practices, I am capable of interacting and fitting into almost any team.
      </SectionContent>
    </SectionInner>
  </Section>
)

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

const SectionContent = styled.div`
    h3 {
        font-size: 22px;
    }

    hr {
        border: #C2EAD2 1px solid;
    }
`
