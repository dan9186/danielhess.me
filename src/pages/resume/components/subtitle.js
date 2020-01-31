import styled from 'styled-components'

export const Subtitle = styled.h2`
  display: flex;
  margin: ${props => props.theme.spacing(0)};
  padding-left: ${props => props.theme.spacing(1)};
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-top: ${props => props.theme.spacing(2)};

  color: ${props => props.theme.palette.grey[300]};
  font-size: 18px;
  font-weight: 400;
  text-transform: capitalize;

  border-bottom: 1px solid ${props => props.theme.palette.grey[700]};
`
