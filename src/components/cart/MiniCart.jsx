import { StyledCart } from "../styled/Cart.styled";

const MiniCart = ({ cartItems }) => {
  return (
    <StyledCart>
      <div className="cart-wrapper">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ display: "flex" }}>
                <img
                  src={item.main}
                  alt=""
                  width={50}
                  style={{ borderRadius: "4px" }}
                />
                <div>
                  {item.name} - ${item.price} x {item.quantity}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledCart>
  );
};

export default MiniCart;
