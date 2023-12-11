import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to get items for a user
export const getItems = async (userID) => {
  try {
    const q = query(collection(db, "users", userID, "items"));
    const querySnapshot = await getDocs(q);

    const mappedItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return mappedItems;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

// Function to add an item for a user
export const addItem = async (userId, item) => {
  try {
    const userItemsRef = collection(db, "users", userId, "items");
    const itemDoc = await addDoc(userItemsRef, item);

    console.log("Document written with ID: ", itemDoc.id);
    return itemDoc.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};