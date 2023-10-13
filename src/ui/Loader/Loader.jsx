import styled, { keyframes } from 'styled-components'

const load = keyframes`
  from, to {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
`

const Container = styled.div`
  margin: 0 auto;
`

const Circle = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.monochrome.white};
  border-radius: 50%;
  animation: ${load} 1.4s infinite;

  &:not(:last-of-type) {
    margin-right: 4px;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`

export const Loader = () => (
  <Container>
    <Circle />
    <Circle />
    <Circle />
  </Container>
)
