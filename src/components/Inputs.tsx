import React, { useState } from "react";

export const Inputs = () => {
  const [selected, setSelected] = useState<string>();
  console.log(selected);

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
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>
      <div>
        <label>Quantity</label> <input type="number" />
      </div>
      <div>
        <label>Name</label> <input type="text" />
      </div>
    </main>
  );
};
