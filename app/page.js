
import Link from 'next/link'
import StudentInfo from './student_info'

export default function Home() {
  return (
    <main>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo></StudentInfo>
      <Link to="app\week2\page1.js">week2</Link>
    </main>
   
  )
}
