import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { products } from "./products";
import OrderModal from "./components/OrderModal";

const Home = () => {
  const [quantities, setQuantities] = useState({});

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

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
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
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

        <section>
          <Cart
            products={products}
            quantities={quantities}
            setQuantities={setQuantities}
            onDecrement={handleDecrement}
            onConfirm={handleConfirmOrder}
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
