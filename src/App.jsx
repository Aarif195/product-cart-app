import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./Main.css";
import ProductList from "./components/ProductList";
import { products } from "./products";

import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;



