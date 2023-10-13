import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Graphik'
  }

  h1 {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  button {
    border: none;
    outline: none;
  }
`
