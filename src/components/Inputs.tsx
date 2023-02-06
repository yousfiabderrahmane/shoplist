import React, { useState } from "react";
import { useShopContext } from "../Context/Context";
import { ActionType } from "../Context/Context";

export const Inputs = () => {
  const [selected, setSelected] = useState<string>();
  const [quantity, setQuantity] = useState<number>();
  const [name, setName] = useState<string>();

  const { handleAdd } = useShopContext();

  const handleSubmit = () => {
    const item = {
      name,
      quantity,
      option: selected,
      id: Math.random() * 999,
    };

    handleAdd(item);
  };

  return (
    <main>
      <p>Add new products</p>
      <div>
        <label>Section</label>
        <select
          value={selected}
          name="pets"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">-- Select an option --</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>
      <div>
        <label>Quantity</label>{" "}
        <input
          onChange={(e) => setQuantity(Number(e.target.value))}
          type="number"
        />
      </div>
      <div>
        <label>Name</label>{" "}
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
};
