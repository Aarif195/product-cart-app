const OrderModal = ({ cartItems, quantities, onStartNewOrder }) => {
  const totalPrice = cartItems.reduce(
    (total, product) => total + quantities[product.id] * product.price,
    0
  );

  return (
    <section className="confirm-modal">
      <div className="confirm-box">
        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt="Order Confirmed"
          className="image"
        />
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>

        <div className="item-box">
          {cartItems.map((product) => (
            <div key={product.id} className="modal-item">
              <div className="item-box-list">
                <img
                  src={`/assets/images/${product.image}`}
                  alt={product.name}
                  style={{ width: "40px", borderRadius: "8px" }}
                />

                <div>
                  <p>{product.name}</p>

                  <div className="paragraph">
                    <p>× {quantities[product.id]}</p>
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>

              <div>
                <p>${(quantities[product.id] * product.price).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="order-total">
          <p>Order Total</p>
          <h3 className="orderTotalH3">${totalPrice.toFixed(2)}</h3>
        </div>

        <button className="new-order-btn" onClick={onStartNewOrder}>
          Start New Order
        </button>
      </div>
    </section>
  );
};

export default OrderModal;
