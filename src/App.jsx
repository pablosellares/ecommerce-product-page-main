import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";
import Product from "./components/product/Product";

const theme = {
  colors: {
    primary: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
    },
    neutral: {
      veryDarkBlue: "hsl(220, 13%, 13%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      grayishBlue: "hsl(220, 14%, 75%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsla(0, 0%, 0%)",
      black75: "hsla(0, 0%, 0%,.75)",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Container>
          <Header />
          <Product />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
