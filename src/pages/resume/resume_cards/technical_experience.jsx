import React from 'react'

import { Row, Section, SubHeading, Divider } from '../../../components/section/section'
import { SkillGroup } from '../components/skill_group'

const languages = {
  'Golang': 3,
  'Java': 1,
  'JavaScript': 1,
  'Make': 2,
  'PHP': 1,
  'Python': 1,
  'Ruby': 2,
  'SQL': 3,
  'Shell Scripts': 3,
  'VimL': 1,
}

const frameworks = {
  'Cucumber': 3,
  'Goblin/Gomega': 3,
  'Gorilla Mux': 3,
  'Sinatra': 2,
  'Swagger': 2,
}

const systems = {
  'CentOS': 3,
  'Red Hat Enterprise Linux': 3,
  'Ubuntu': 3,
  'Debian': 3,
  'Mac OS X': 3,
  'Windows': 2,
}

const infrastructure = {
  'Amazon Web Services': 3,
  'ApolloMQ': 2,
  'Digitial Ocean': 2,
  'Google Cloud Platform': 3,
  'Kubernetes': 2,
  'Postgres': 3,
  'RabbitMQ': 3,
  'Redis': 2,
  'etcd': 3,
}

const tools = {
  'Ansible': 3,
  'Chef': 1,
  'CircleCI': 2,
  'Docker': 3,
  'Drone': 1,
  'Git': 3,
  'Graphite/Graphana': 3,
  'Jenkins': 2,
  'Packer': 3,
  'RVM': 3,
  'TeamCity': 2,
  'TravisCI': 3,
  'Vagrant': 3,
  'Vim/Vi': 3,
}

export const TechnicalExperience = () => (
  <Section>
    <SubHeading>Technical Experience</SubHeading>
    <Divider />
    <Row>
      <SkillGroup subject={ languages } name={ 'languages' } cols={ 2 } />
      <SkillGroup subject={ frameworks } name={ 'frameworks' } cols={ 1 } />
    </Row>
    <Row>
      <SkillGroup subject={ systems } name={ 'systems' } cols={ 1 } />
      <SkillGroup subject={ infrastructure } name={ 'infrastructure' } cols={ 2 } />
    </Row>
    <Row>
      <SkillGroup subject={ tools } name={ 'tools' } cols={ 3 } />
    </Row>
  </Section>
)
