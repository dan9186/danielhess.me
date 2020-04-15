import styled from 'styled-components'

export const Title = styled.h1`
  display: flex;
  flex-flow: column;
  margin: ${({ theme }) => theme.spacing(0)};
  margin-right: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(1)};

  color: #e3e3e3;
  font-size: 24px;
  font-weight: 600;

  &:after {
    margin-top: ${({ theme }) => theme.spacing(2)};
    content: '';
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.palette.grey[600]},
      ${({ theme }) => theme.palette.grey[850]}
    );
    height: 1px;
    width: 100%;
  }
`
