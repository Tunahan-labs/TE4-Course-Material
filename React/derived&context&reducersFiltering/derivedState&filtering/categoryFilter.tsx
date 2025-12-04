import { useMemo, useState } from "react";

type Category = "all" | "tech" | "food" | "clothing";

type Product = {
  id: number;
  name: string;
  category: Exclude<Category, "all">;
  price: number;
};

const Products: Product[] = [
  { id: 1, name: "Laptop", category: "tech", price: 1200 },
  { id: 2, name: "Smartphone", category: "tech", price: 800 },
  { id: 3, name: "Headphones", category: "tech", price: 150 },
  { id: 4, name: "Apple", category: "food", price: 1.5 },
  { id: 5, name: "Banana", category: "food", price: 0.75 },
  { id: 6, name: "Bread", category: "food", price: 2.5 },
  { id: 7, name: "T-Shirt", category: "clothing", price: 25 },
  { id: 8, name: "Jeans", category: "clothing", price: 60 },
  { id: 9, name: "Jacket", category: "clothing", price: 120 },
];

export default function CategoryFilter() {
  const [category, setCategory] = useState<Category>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"none" | "asc" | "desc">("none");

  const visibleProducts = useMemo(() => {
    const q = query.trim().toLowerCase();

    let items = Products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (q && !p.name.toLowerCase().includes(q)) return false;
      return true;
    });

    if (sort === "asc") {
      items = items.slice().sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      items = items.slice().sort((a, b) => b.price - a.price);
    }

    return items;
  }, [category, query, sort]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 16 }}>
      <h3>Products</h3>

      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 12,
          alignItems: "center",
        }}
      >
        <label>
          Search:
          <input
            aria-label="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name"
            style={{ marginLeft: 8 }}
          />
        </label>

        <label>
          Category:
          <select
            aria-label="Filter by category"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            style={{ marginLeft: 8 }}
          >
            <option value="all">All</option>
            <option value="tech">Tech</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
          </select>
        </label>

        <label>
          Sort by price:
          <select
            aria-label="Sort by price"
            value={sort}
            onChange={(e) => setSort(e.target.value as "none" | "asc" | "desc")}
            style={{ marginLeft: 8 }}
          >
            <option value="none">None</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </label>
      </div>

      <ul>
        {visibleProducts.map((p) => (
          <li key={p.id}>
            {p.name} — ${p.price.toFixed(2)}{" "}
            <small style={{ color: "#666" }}>({p.category})</small>
          </li>
        ))}
      </ul>

      {visibleProducts.length === 0 && <div>No products found.</div>}
    </div>
  );
}
