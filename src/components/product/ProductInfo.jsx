import { useState } from "react";
import Data from "./Data";

const ProductInfo = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-info">
      <span className="product-info_company">Sneaker Company</span>
      <h1 className="product-info_title">{Data.name}</h1>
      <p className="product-info_description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-info_price">
        <p className="product-info_price--final">${Data.price}</p>
        <span className="product-info_price--discount">{Data.discount}%</span>
      </div>
      <div className="product-info_price--old">
        <p>${Data.oldPrice}</p>
      </div>
      <div className="product-info_actions">
        <div className="qty">
          <button className="qty-decrease" onClick={decreaseQuantity}>
            <img src="src/assets/icon-minus.svg" alt="" />
          </button>
          <span className="counter">{quantity}</span>
          <button className="qty-increase" onClick={increaseQuantity}>
            <img src="src/assets/icon-plus.svg" alt="" />
          </button>
        </div>

        <button type="submit" className="add-to-cart" onClick={handleAddToCart}>
          <img src="src/assets/icon-cart.svg" alt="" />
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
