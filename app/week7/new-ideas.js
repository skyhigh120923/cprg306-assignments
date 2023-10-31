import React, { useState } from 'react';
export default function NewItem({ onAddItem }) {
    const [item, setItem] = useState({ name: '', quantity: '', category: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevState => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItem(item);
        setItem({ name: '', quantity: '', category: '' });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={item.name} 
                onChange={handleChange} 
                placeholder="Item Name" 
            /><br/>
            <input 
                type="number" 
                name="quantity" 
                value={item.quantity} 
                onChange={handleChange} 
                placeholder="Item Quantity" 
            /><br/>
            <select name="category" value={item.category} onChange={handleChange}>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Dairy">Dairy</option>
                <option value="Dairy">Dairy</option>
                <option value="Dairy">Dairy</option>
                <option value="Dairy">Dairy</option>
                <option value="Dairy">Dairy</option>
                <option value="Dairy">Dairy</option>
                <option value="Dairy">Dairy</option>
            </select><br/>
            <button style={{color: 'black'}}>Add</button>
        </form>
    );
}