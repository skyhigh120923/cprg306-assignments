"use client";
import Link from 'next/link'
import NewItem from './new-item';


export default function Page() {
  return(
  <main>
    <div>
      <h1>Add New Item</h1>
      <NewItem />
      
    </div>
   <Link href="../">Click here to go to main page</Link>
  </main>);
}