import type { JSX } from "react";
import FruitList from "./fruitList";

import CategoryFilter from "./categoryFilter";

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Fruit Search</h1>
      <FruitList />
      <hr />
      <CategoryFilter />
    </div>
  );
}
