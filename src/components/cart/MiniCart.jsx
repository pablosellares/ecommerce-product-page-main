import { StyledCart } from "../styled/Cart.styled";
import { getImageURL } from "../utils/getImage";
import deleteImg from "../../assets/icon-delete.svg";

const MiniCart = ({ cartItems, handleCheckout, handleDelete }) => {
  return (
    <StyledCart>
      <h2>Cart</h2>
      <div className="cart-wrapper">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={getImageURL(item.main)}
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
                    src={deleteImg}
                    alt="Delete item"
                    title="Delete Item from Cart"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length === 0 ? (
        ""
      ) : (
        <button type="submit" className="btn-checkout" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </StyledCart>
  );
};

export default MiniCart;
