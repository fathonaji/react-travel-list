export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>
        {item.quantity} {item.description}{" "}
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </span>
    </li>
  );
}
