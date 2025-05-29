const Cart = ({
  products,
  quantities,
  setQuantities,
  onDecrement,
  onConfirm,
}) => {
  const cartItems = products.filter((product) => quantities[product.id]);

  if (cartItems.length === 0) {
    return (
      <div className="cart-box">
        <h3>Your Cart (0)</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <img
              src="/assets/images/illustration-empty-cart.svg"
              alt="empty cart"
            />
            <p>Your added items will appear here</p>
          </div>
        </div>
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (total, product) => total + quantities[product.id] * product.price,
    0
  );

  return (
    <div className="cart-box-filled">
      <h3>Your Cart ({cartItems.length})</h3>

      <div className="order-list-box">
        {cartItems.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="orderLists">
              <div className="orderList-item">
                <img
                  src={`/assets/images/${product.image}`}
                  alt={product.name}
                  style={{ width: "40px", borderRadius: "8px" }}
                />
                <p>{product.name}</p>
              </div>

              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
                alt="cancel"
                className="canclebotton"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                onClick={() => onDecrement(product.id)} 
              />
            </div>

            <div className="items">
              <p>{quantities[product.id]}×</p>
              <p>${product.price}</p>
              <p>${(quantities[product.id] * product.price).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <p>Order Total</p>
        <h3 className="cart-total-h3">${totalPrice.toFixed(2)}</h3>
      </div>

      <div className="carbon-box">
        <img
          src="/assets/images/icon-carbon-neutral.svg"
          alt="carbon neutral"
        />
        <p>
          This is a <span>carbon-neutral</span> delivery
        </p>
      </div>

      <button className="confirm-order-btn" onClick={onConfirm}>
        Confirm Order
      </button>
    </div>
  );
};

export default Cart;
