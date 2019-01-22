import React from 'react'
import styled from 'styled-components'

export class Typography extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading>Typography</Heading>

        <SubHeading>Headings</SubHeading>
        <Divider />
        <h1>h1. Heading <small>Secondary text</small></h1>
        <h2>h2. Heading <small>Secondary text</small></h2>
        <h3>h3. Heading <small>Secondary text</small></h3>
        <h4>h4. Heading <small>Secondary text</small></h4>
        <h5>h5. Heading <small>Secondary text</small></h5>
        <h6>h6. Heading <small>Secondary text</small></h6>

        <SubHeading>Horizontal Rule</SubHeading>
        <Divider />
        <hr />

        <SubHeading>General Text</SubHeading>
        <Divider />
        I'm the Doctor, I can save the world with a kettle and some string! And look! I'm wearing a vegetable! I'm Dr. James McCrimmon from the township of Balamory. Black tie...Whenever I wear this, something bad always happens. Goodbye...my Sarah Jane! What? What?! WHAT?! Allons-y! Please, when Torchwood comes to write my complete history, don't tell people I travelled through time and space with her mother! Sweet, maybe... Passionate, I suppose... But don't ever mistake that for nice. I'll tell you what, then: don't...step on any butterflies. What have butterflies ever done to you?

        <SubHeading>Paragraphs</SubHeading>
        <Divider />
        <p>Goodbye...my Sarah Jane! You can spend the rest of your life with me, but I can't spend the rest of mine with you. I have to live on. Alone. That's the curse of the Time Lords. Allons-y! You need to get yourself a better dictionary. When you do, look up 'genocide'. You'll find a little picture of me there, and the caption'll read 'Over my dead body'. I'm the Doctor, I can save the world with a kettle and some string! And look! I'm wearing a vegetable! There was a war. A Time War. The Last Great Time War. My people fought a race called the Daleks, for the sake of all creation. And they lost. We lost. Everyone lost. They're all gone now. My family. My friends. Even that sky.</p>
        <p>Sweet, maybe... Passionate, I suppose... But don't ever mistake that for nice. You can spend the rest of your life with me, but I can't spend the rest of mine with you. I have to live on. Alone. That's the curse of the Time Lords. I'm Dr. James McCrimmon from the township of Balamory. Goodbye...my Sarah Jane! I'm sorry. I'm so sorry. People assume that time is a strict progression of cause-and-effect... but actually, from a non-linear, non-subjective viewpoint, it's more like a big ball of wibbly-wobbly... timey-wimey... stuff.</p>

        <SubHeading>Links</SubHeading>
        <Divider />
        <p>Wibbly-wobbly... timey-wimey... <a href="#">stuff</a>.</p>

        <SubHeading>Unordered List</SubHeading>
        <Divider />
        <ul>
          <li>1st Doctor</li>
          <li>2nd Doctor</li>
          <li>3rd Doctor</li>
          <li>4th Doctor</li>
          <li>5th Doctor</li>
          <li>6th Doctor</li>
          <li>7th Doctor</li>
          <li>8th Doctor</li>
          <li>War Doctor</li>
          <li>9th Doctor</li>
          <li>10th Doctor</li>
          <li>11th Doctor</li>
          <li>12th Doctor</li>
          <li>13th Doctor</li>
        </ul>

        <SubHeading>Ordered List</SubHeading>
        <Divider />
        <ol>
          <li>Doctor</li>
          <li>Doctor</li>
          <li>Doctor</li>
          <li>Doctor</li>
          <li>Doctor</li>
          <li>Doctor</li>
          <li>Doctor</li>
          <li>Doctor</li>
          <li>War Doctor</li>
          <li>Doctor</li>
          <li>Doctor</li>
          <li>Doctor</li>
          <li>Doctor</li>
          <li>Doctor</li>
        </ol>
      </React.Fragment>
    )
  }
}

const Heading = styled.h1`
  font-size: 30px !important;
  margin-bottom: 5px !important;
  color: #ababab !important;
`

const SubHeading = styled.h2`
  font-size: 22px !important;
  margin-top: 22px !important;
  margin-bottom: 3px !important;
  color: #ababab !important;
`

const Divider = styled.hr`
  border: 1px solid #dedede !important;
  margin-bottom: 3px !important;
`
