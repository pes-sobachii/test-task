import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Syne', sans-serif;
    overflow-x: hidden;
  }
  button, a {
    all: unset;
    cursor: pointer;
  }
`

export default GlobalStyle
