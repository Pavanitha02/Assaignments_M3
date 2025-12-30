import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
  price: i + 1,
}));

function App() {
  const [counter, setCounter] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return productsData.reduce((acc, product) => acc + product.price, 0);
  }, [productsData]);

  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={productsData}
        onSelect={handleSelectProduct}
      />
    </div>
  );
}

export default App;
