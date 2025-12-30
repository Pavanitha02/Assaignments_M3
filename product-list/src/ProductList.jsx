function ProductList({ products, onSelect }) {
  console.log("ProductList re-rendered");

  return (
    <ul>
      {products.slice(0, 5).map((product) => (
        <li key={product.id}>
          {product.name} - ₹{product.price}
          <button onClick={() => onSelect(product)}>
            Select
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
