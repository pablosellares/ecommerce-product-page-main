import { useState } from "react";

const ProductInfo = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <div className="product-info">
      <span className="product-info_company">Sneaker Company</span>
      <h1 className="product-info_title">Fall Limited Edition Sneakers</h1>
      <p className="product-info_description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-info_price">
        <p>$125.00</p>
        <span>50%</span>
      </div>
      <div className="product-info_price--old">
        <p>$250.00</p>
      </div>
      <div className="product-info_actions">
        <div className="qty">
          <button className="qty-decrease" onClick={handleDecrease}>
            <img src="src/assets/icon-minus.svg" alt="" />
          </button>
          {/* <input
            type="number"
            name="input-total"
            id="qty-total"
            placeholder="0"
          /> */}
          <span className="counter">{count}</span>
          <button className="qty-increase" onClick={handleIncrease}>
            <img src="src/assets/icon-plus.svg" alt="" />
          </button>
        </div>

        <button type="submit" className="add-to-cart">
          <img src="src/assets/icon-cart.svg" alt="" />
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
