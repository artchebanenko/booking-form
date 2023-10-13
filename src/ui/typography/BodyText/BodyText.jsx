import styled from 'styled-components'

const Style = styled.div`
  color: ${({ theme, color }) =>
    color ? color : theme.colors.monochrome.black};
  font-size: 16px;
  line-height: 24px;
  text-align: ${({ center }) => center && 'center'};
  white-space: pre-line;
`

export const BodyText = ({ children, center, color }) => {
  return (
    <Style center={center} color={color}>
      {children}
    </Style>
  )
}
