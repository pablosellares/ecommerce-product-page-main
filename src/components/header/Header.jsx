import Logo from "../common/Logo";
import { StyledHeader } from "../styled/Header.styled";
import Avatar from "./Avatar";
import Nav from "./Nav";
import Cart from "./Cart";
import Indicator from "./Indicator";

const Header = ({ addToCart, handleCart }) => {
  return (
    <StyledHeader>
      <div className="header-left">
        <Logo />
        <Nav />
      </div>
      <div className="header-right">
        <Indicator addToCart={addToCart} />
        <Cart handleCart={handleCart} />
        <Avatar />
      </div>
    </StyledHeader>
  );
};

export default Header;
