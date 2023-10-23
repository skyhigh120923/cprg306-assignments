import { useState } from 'react';

function NewItem({ onAddItem }) {
  // Initialize state variables
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Create a form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an item object
    const newItem = { name, quantity, category };

    // Call the onAddItem prop to add the item to the list
    onAddItem(newItem);

    // Reset state variables to their initial values
    setName('');
    setQuantity(1);
    setCategory('produce');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded w-full py-2 px-3 focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Quantity Field */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-black font-semibold mb-2">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="border rounded w-full py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-black font-semibold mb-2">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded w-full py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
 


export default NewItem;
