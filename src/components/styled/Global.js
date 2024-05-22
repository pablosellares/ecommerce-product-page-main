import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: "Kumbh Sans", sans-serif;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.debug {
  border: 1px dashed red;
}

body {
  background-color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 16px;
}

button {
  border: none;
}

img {
  max-width: 100%;
  display: block;
}

input[type="number"] {
  background-color: transparent;
  border: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

li {
  list-style: none;
}
`

export default GlobalStyles