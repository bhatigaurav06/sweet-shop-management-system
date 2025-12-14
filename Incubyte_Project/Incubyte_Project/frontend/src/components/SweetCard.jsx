export default function SweetCard({ sweet, onPurchase }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Available: {sweet.quantity}</p>

      <button
        disabled={sweet.quantity === 0}
        onClick={() => onPurchase(sweet.id)}
      >
        {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
      </button>
    </div>
  );
}
