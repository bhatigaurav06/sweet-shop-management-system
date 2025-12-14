import { useEffect, useState } from "react";
import { getSweets, purchaseSweet } from "../api/api";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    getSweets().then(res => setSweets(res.data));
  }, []);

  return (
    <div>
      {sweets.map(s => (
        <div key={s.id}>
          <h3>{s.name}</h3>
          <p>₹{s.price} | Qty: {s.quantity}</p>
          <button disabled={s.quantity === 0}
            onClick={() => purchaseSweet(s.id)}>
            Purchase
          </button>
        </div>
      ))}
    </div>
  );
}
