import cartImg from "../../assets/icon-cart.svg";

const Cart = ({ handleCart }) => {
  return (
    <div className="cart" onClick={handleCart}>
      <ul></ul>
      <img src={cartImg} alt="" />
    </div>
  );
};

export default Cart;
