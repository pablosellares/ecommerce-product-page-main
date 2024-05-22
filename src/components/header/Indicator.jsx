const Indicator = ({ cartItems, handleCart }) => {
  return (
    <div className="indicator" onClick={handleCart}>
      {cartItems.length === 0 ? (
        ""
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.quantity}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Indicator;
