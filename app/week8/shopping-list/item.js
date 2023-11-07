import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li className="bg-yellow shadow-md rounded-lg p-4 mb-4" onClick={() => onSelect({ name, quantity, category })}>
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-gray-600">{category}</div>
      <div className="text-sm text-gray-500">{`Quantity: ${quantity}`}</div>
    </li>
  );
};

export default Item;
