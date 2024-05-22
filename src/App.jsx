import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import MiniCart from "./components/cart/MiniCart";
import Data from "./components/product/Data";

const theme = {
  colors: {
    primary: {
      orange: "hsl(26, 100%, 55%)",
      orangeHover: "hsl(26, 100%, 45%)",
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
  const [cartItems, setCartItems] = useState([]);
  const [hasQuantity, setHasQuantity] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);

  const addToCart = (product) => {
    setCartItems([product]);
    setHasQuantity(true);
  };

  const handleCart = () => {
    if (!isCartActive) {
      setIsCartActive(true);
    } else {
      setIsCartActive(false);
    }
  };

  const handleDelete = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Container>
          <Header addToCart={addToCart} handleCart={handleCart} />
          {isCartActive ? (
            <MiniCart
              cartItems={cartItems}
              handleCheckout={handleCheckout}
              handleDelete={handleDelete}
            />
          ) : (
            ""
          )}
          <Product product={Data} addToCart={addToCart} />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
