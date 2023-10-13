import styled from 'styled-components'

export const HBox = styled.div`
  min-height: ${({ theme, x }) =>
    x || x === 0 ? x * theme.padding.main : theme.padding.main}px;
`
