import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  color: #78cc6d;
  font-size: 24px;
  padding-left: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};
`
