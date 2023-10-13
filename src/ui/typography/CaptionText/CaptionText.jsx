import styled from 'styled-components'

const Style = styled.span`
  display: ${({ center }) => center && 'block'};
  color: ${({ theme }) => theme.colors.secondary.medium};
  font-size: 12px;
  line-height: 16px;
  text-align: ${({ center }) => center && 'center'};
`

export const CaptionText = ({ children, center }) => {
  return <Style center={center}>{children}</Style>
}
