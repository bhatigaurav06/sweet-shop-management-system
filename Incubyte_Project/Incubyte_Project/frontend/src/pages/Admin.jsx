import { useState } from "react";
import { addSweet } from "../api/api";

export default function Admin() {
  const [sweet, setSweet] = useState({
    name: "",
    category: "",
    price: "",
    quantity: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addSweet({
        ...sweet,
        price: Number(sweet.price),
        quantity: Number(sweet.quantity)
      });
      alert("Sweet added successfully");
    } catch (err) {
      alert("Failed to add sweet");
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e) =>
            setSweet({ ...sweet, name: e.target.value })
          }
        />

        <input
          placeholder="Category"
          onChange={(e) =>
            setSweet({ ...sweet, category: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Price"
          onChange={(e) =>
            setSweet({ ...sweet, price: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Quantity"
          onChange={(e) =>
            setSweet({ ...sweet, quantity: e.target.value })
          }
        />

        <button>Add Sweet</button>
      </form>
    </div>
  );
}
