const Cart = ({ handleCart }) => {
  return (
    <div className="cart" onClick={handleCart}>
      <ul></ul>
      <img src="src/assets/icon-cart.svg" alt="" />
    </div>
  );
};

export default Cart;
