import React from "react";

export const Inputs = () => {
  return (
    <main>
      <p>Add new products</p>
      <div>
        <label>Section</label>
        <select name="pets">
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
