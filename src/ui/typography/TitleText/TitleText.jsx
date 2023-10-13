import styled from 'styled-components'

const Style = styled.h1`
  color: ${({ theme }) => theme.colors.monochrome.black};
  font-size: 44px;
  font-weight: 900;
  line-height: 48px;
  text-align: ${({ center }) => center && 'center'};
  white-space: pre-line;
`

export const TitleText = ({ children, center }) => {
  return <Style center={center}>{children}</Style>
}
