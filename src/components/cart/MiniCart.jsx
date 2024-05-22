import { StyledCart } from "../styled/Cart.styled";

const MiniCart = ({ cartItems, handleCheckout, handleDelete }) => {
  return (
    <StyledCart>
      <h2>Cart</h2>
      <div className="cart-wrapper">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.main}
                  alt=""
                  width={50}
                  style={{ borderRadius: "4px" }}
                />
                <div className="cart-description">
                  {item.name} - ${item.price} x {item.quantity}{" "}
                  <b>${item.price * item.quantity}.00</b>
                </div>
                <div className="cart-delete" onClick={handleDelete}>
                  <img
                    src="src/assets/icon-delete.svg"
                    alt="Delete item"
                    title="Delete Item from Cart"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button type="submit" className="btn-checkout" onClick={handleCheckout}>
        Checkout
      </button>
    </StyledCart>
  );
};

export default MiniCart;
