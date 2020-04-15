import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`
