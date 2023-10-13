import { useState } from 'react'
import { MicroText } from '@ui/typography'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 78px;
`

const Label = styled.label`
  position: absolute;
  top: ${({ focused }) => (focused ? 8 : 16)}px;
  left: 16px;
  color: ${({ theme, focused, error }) =>
    error
      ? theme.colors.status.error
      : focused
      ? theme.colors.secondary.medium
      : theme.colors.gray.dark};
  font-size: ${({ focused }) => (focused ? 12 : 16)}px;
  line-height: ${({ focused }) => (focused ? 16 : 24)}px;
  transition: all 0.1s ease-out;
  cursor: text;
`

const Input = styled.input`
  position: absolute;
  padding: 24px 16px 8px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  text-overflow: ellipsis;
  background-color: ${({ theme, focused, error }) =>
    error
      ? theme.colors.status.errorBackground
      : focused
      ? 'transparent'
      : theme.colors.secondary.extraLight};
  border: 1px solid
    ${({ theme, focused, error }) =>
      error
        ? theme.colors.status.error
        : focused
        ? theme.colors.secondary.light
        : 'transparent'};
  border-radius: 4px;
  transition: all 0.1s ease-out;
  outline: 0;
`

const Error = styled(MicroText)`
  position: absolute;
  top: 64px;
  right: 0;
  transition: all 0.1s ease-out;
`

export const TextInput = ({
  label,
  id,
  type = 'text',
  autocomplete = 'off',
  value,
  error,
  onChange,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [focused, setFocused] = useState(!!value)
  function handleFocus(e) {
    setFocused(true)
    if (onFocus) {
      onFocus(e)
    }
  }
  function handleBlur(e) {
    if (!value) {
      setFocused(false)
    }
    if (onBlur) {
      onBlur(e)
    }
  }

  function handleChange(e) {
    onChange(e)
  }

  return (
    <Container error={!!error}>
      <Input
        id={id}
        type={type}
        value={value}
        focused={focused}
        error={!!error}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete={autocomplete}
        {...rest}
      />
      <Label htmlFor={id} focused={focused} error={!!error}>
        {label}
      </Label>
      {error && <Error>{error}</Error>}
    </Container>
  )
}
