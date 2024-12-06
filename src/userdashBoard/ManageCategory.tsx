import React, { useState } from "react";

const ManageCategories = ({ categories, setCategories }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleRemoveCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="New Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={handleAddCategory}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
          >
            Add
          </button>
        </div>
        <ul className="mt-4">
          {categories.map((cat, idx) => (
            <li key={idx} className="flex justify-between items-center">
              {cat}
              <button
                onClick={() => handleRemoveCategory(cat)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageCategories;
