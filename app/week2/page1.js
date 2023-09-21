
import Link from 'next/link'
import StudentInfo from './student_info'

export default function Home1() {
  return (
    <main>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo></StudentInfo>
      <Link href="www.google.com">week2</Link>
    </main>
   
  )
}