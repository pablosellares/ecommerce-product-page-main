import { useState } from "react";
import Data from "./Data";
import cartImg from "../../assets/icon-cart.svg";
import iconPlusImg from "../../assets/icon-plus.svg";
import iconMinusImg from "../../assets/icon-minus.svg";

const ProductInfo = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
      setQuantity(0);
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
      <div className="product-info_price--wrapper">
        <div className="product-info_price">
          <p className="product-info_price--final">${Data.price}</p>
          <span className="product-info_price--discount">{Data.discount}%</span>
        </div>
        <div className="product-info_price--old">
          <p>${Data.oldPrice}</p>
        </div>
      </div>
      <div className="product-info_actions">
        <div className="qty">
          <button className="qty-decrease" onClick={decreaseQuantity}>
            <img src={iconMinusImg} alt="" />
          </button>
          <span className="counter">{quantity}</span>
          <button className="qty-increase" onClick={increaseQuantity}>
            <img src={iconPlusImg} alt="" />
          </button>
        </div>
        <button
          type="submit"
          className="btn add-to-cart"
          onClick={handleAddToCart}
        >
          <img src={cartImg} alt="" />
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
