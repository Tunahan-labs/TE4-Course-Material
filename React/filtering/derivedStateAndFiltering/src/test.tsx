import { useEffect, useState } from "react";

type SortOrder = "price-asc" | "price-desc";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 699 },
  { id: 3, name: "Tablet", price: 499 },
];

const ProductsList = () => {
  const [query, setQuery] = useState("");
  const [productsList, setProductsList] = useState(products);
  const [sortOrder, setSortOrder] = useState<SortOrder>("price-asc");

  useEffect(() => {
    // Simulate fetching data
    if (query === "") setProductsList(products);
  }, [query]);

  // 1. Filter
  const filteredProducts = productsList.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  // 2. Sort (derived from sortOrder)
  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOrder === "price-asc" ? a.price - b.price : b.price - a.price
  );

  // 3 .Handlers
  const toggleSort = () => {
    setSortOrder((prevOrder) =>
      prevOrder === "price-asc" ? "price-desc" : "price-asc"
    );
  };

  return (
    <div>
      <h2>Products</h2>

      {/* Search */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />

      {/* Sorting */}
      <select name="sort" value={sortOrder} onChange={toggleSort}>
        <option value="price-asc">Sort by Price: Low to High</option>
        <option value="price-desc">Sort by Price: High to Low</option>
      </select>

      {/* Render */}
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
