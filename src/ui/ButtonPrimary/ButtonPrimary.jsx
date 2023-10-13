import { useState } from 'react'
import styled from 'styled-components'
import { Loader } from '../Loader'

const StyledButton = styled.button`
  width: 100%;
  height: 56px;
  color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.colors.gray.light : theme.colors.monochrome.white};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  background-color: ${({ theme, isDisabled, $loading, hovered, pressed }) =>
    isDisabled
      ? theme.colors.monochrome.white
      : $loading || pressed
      ? theme.colors.primary.extraDark
      : hovered
      ? theme.colors.primary.dark
      : theme.colors.primary.default};
  border: 1px solid
    ${({ theme, isDisabled }) =>
      isDisabled ? theme.colors.gray.light : 'transparent'};
  border-radius: 4px;
  cursor: ${({ isDisabled, $loading }) =>
    isDisabled || $loading ? 'default' : 'pointer'};
  pointer-events: ${({ isDisabled, $loading }) =>
    (isDisabled || $loading) && 'none'};

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`

export const ButtonPrimary = ({
  type = 'button',
  children,
  onClick,
  isDisabled,
  loading,
}) => {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  function handleClick() {
    if (!onClick || isDisabled || loading) {
      return
    }
    onClick()
  }

  function handleOver() {
    setHovered(true)
  }
  function handleOut() {
    setHovered(false)
  }
  function handleDown() {
    setPressed(true)
  }
  function handleUp() {
    setPressed(false)
  }

  return (
    <StyledButton
      type={type}
      onClick={handleClick}
      isDisabled={isDisabled}
      $loading={loading}
      hovered={hovered}
      pressed={pressed}
      onMouseOver={handleOver}
      onMouseOut={handleOut}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
    >
      {loading ? <Loader /> : children}
    </StyledButton>
  )
}
