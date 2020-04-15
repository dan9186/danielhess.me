import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  &:last-child {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`
