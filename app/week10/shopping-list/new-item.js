import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };

    onAddItem(item);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 text-gray-700" />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 text-gray-700"
          />
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 text-gray-700"
          >

          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;