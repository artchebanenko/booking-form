import styled from 'styled-components'

export const VBox = styled.div`
  min-width: ${({ theme, x }) =>
    x || x === 0 ? x * theme.padding.main : theme.padding.main}px;
`
