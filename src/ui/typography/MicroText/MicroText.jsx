import styled from 'styled-components'

const Style = styled.span`
  color: ${({ theme }) => theme.colors.status.error};
  font-size: 11px;
  line-height: 14px;
`

export const MicroText = ({ children, className }) => {
  return <Style className={className}>{children}</Style>
}
