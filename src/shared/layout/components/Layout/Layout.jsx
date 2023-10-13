import styled from 'styled-components'
import { useBackground } from '@shared/hooks/useBackground'

const Wrapper = styled.div`
  position: absolute;
  padding: 56px;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  ${({ bgUrl }) =>
    bgUrl &&
    `
  background-image: url('${bgUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  `}

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    background: none;
  }
`

export const Layout = ({ children }) => {
  const bgUrl = useBackground()

  if (!bgUrl) {
    return null
  }

  return (
    <Wrapper data-testid="wrapper" bgUrl={bgUrl}>
      {children}
    </Wrapper>
  )
}
