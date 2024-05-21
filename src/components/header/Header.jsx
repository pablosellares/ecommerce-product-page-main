import Logo from "../common/Logo";
import { StyledHeader } from "../styled/Header.styled";
import Avatar from "./Avatar";
import Cart from "./Cart";
import Nav from "./Nav";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-left">
        <Logo />
        <Nav />
      </div>
      <div className="header-right">
        <Cart />
        <Avatar />
      </div>
    </StyledHeader>
  );
};

export default Header;
