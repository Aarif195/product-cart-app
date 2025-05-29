

const ProductList = ({
  products,
  quantities,
  onAddToCart,
  onIncrement,
  onDecrement,
}) => {
  return (
    <>
      {products.map((product) => {
        const quantity = quantities[product.id] || 0;
        const isActive = quantity > 0;

        return (
          <div key={product.id}>
            <div className="big" id={product.id}>
              <img
                src={`/assets/images/${product.image}`}
                alt={product.name}
                className={isActive ? "border-red" : ""}
              />

              {!isActive && (
                <div
                  className="add-to-cart"
                  onClick={() => onAddToCart(product.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img src="/assets/images/icon-add-to-cart.svg" alt="" />
                  <h3>Add to Cart</h3>
                </div>
              )}

              {isActive && (
                <div className="add-to-cart-1 show-flex">
                  <img
                    src="/assets/images/icon-decrement-quantity.svg"
                    alt="decrement"
                    onClick={() => onDecrement(product.id)}
                    style={{ cursor: "pointer" }}
                  />
                  <span className="orderCount">{quantity}</span>
                  <img
                    src="/assets/images/icon-increment-quantity.svg"
                    alt="increment"
                    onClick={() => onIncrement(product.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}
            </div>
            <p>{product.category}</p>
            <h4>{product.name}</h4>
            <h5>${product.price}</h5>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
