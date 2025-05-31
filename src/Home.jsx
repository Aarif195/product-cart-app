import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { products } from "./products";
import OrderModal from "./components/OrderModal";

const Home = () => {
  const [quantities, setQuantities] = useState({});

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // CONFIRM ORDER
  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  // NEW ORDER
  const handleStartNewOrder = () => {
    setQuantities({});
    setIsModalOpen(false);
  };

  // Adding to Cart
  const handleAddToCart = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: 1 }));
  };

  // Increasement and Decrement Function
  const handleIncrement = (id) => {
    console.log(quantities);
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    console.log(quantities);
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => {
      const currentQty = prev[id] || 0;
      if (currentQty <= 1) {
        const newQuantities = { ...prev };
        delete newQuantities[id];
        return newQuantities;
      } else {
        return {
          ...prev,
          [id]: currentQty - 1,
        };
      }
    });
  };


  // Cancle button
  const handleCancel = (id) => {
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  return (
    <>
      <main className="home-main">
        <section>
          <h2>Desserts</h2>
          <div className="productContainer">
            <ProductList
              products={products}
              quantities={quantities}
              onAddToCart={handleAddToCart}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </div>
        </section>

        <section className="second-section">
          <Cart
            products={products}
            quantities={quantities}
            setQuantities={setQuantities}
            onDecrement={handleDecrement}
            onConfirm={handleConfirmOrder}
            onCancle={handleCancel}
          />
        </section>
      </main>

      {isModalOpen && (
        <OrderModal
          cartItems={products.filter((product) => quantities[product.id])}
          quantities={quantities}
          onStartNewOrder={handleStartNewOrder}
        />
      )}
    </>
  );
};

export default Home;
