"use client";
import React, { useState, useEffect } from 'react';
import { getItems, addItem } from "../../week10/_services/shopping-list-service";
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const user = useUserAuth();

  useEffect(() => {
    const loadItems = async () => {
      try {
        if (user) {
          const items = await getItems(user.uid);
          setItems(items);
        }
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };

    loadItems();
  }, [user]);

  const handleItemSelect = (selectedItem) => {
    const cleanedItemName = selectedItem.data.name.split(',')[0].trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = async (newItemName) => {
    try {
      if (user) {
        const newItemId = await addItem(user.uid, { name: newItemName, quantity: 1, category: "other" });
        const newItem = { id: newItemId, data: { name: newItemName, quantity: 1, category: "other" } };
        setItems((prevItems) => [...prevItems, newItem]);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Render the shopping list page content only if the user is logged in
  if (!user) {
    return null; // Render nothing if the user is not logged in
  }

  return (
    <main style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h1 style={{ fontSize: 45 }}>My Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: 30 }}>Meal Ideas</h2>
        <MealIdeas ingredient={selectedItemName} />
      </div>
      <div>
        <Link href="../">Click here to go to the main page</Link>
      </div>
    </main>
  );
}
