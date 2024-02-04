import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = loadSortedItems(items);

  function loadSortedItems(items) {
    if (sortBy === "input") return items;
    if (sortBy === "description")
      return items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed")
      return items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return items;
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sorted by order</option>
          <option value="description">Sorted by description</option>
          <option value="packed">Sorted by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
