import { useState } from "react";
import { foods, filterItems } from "../challanges data/chlng6data";

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const [foodItems, setFoodItems] = useState(foods);
  return (
    <>
      <SearchBar
        state={query}
        onChangeFn={setQuery}
        fooditemSetter={setFoodItems}
      />
      <hr />
      <List items={foodItems} />
    </>
  );
}

function SearchBar({
  query,
  onChangeFn: setQuery,
  fooditemSetter: setFoodItems,
}) {
  function handleChange(e) {
    setQuery((prevState) => prevState + e.target.value);
    if (e.target.value) {
      const data = filterItems(foods, e.target.value);
      if (data) {
        if (data.length !== 0) {
          setFoodItems(data);
        }
      }
    } else {
      setFoodItems(foods);
    }
  }

  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
