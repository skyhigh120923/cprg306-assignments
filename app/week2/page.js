
import Link from 'next/link'
import StudentInfo from '../student_info'

export default function week2() {
  return (
    <main>
      <h1 style={{ fontSize:55}}>My Shopping List</h1>
      <StudentInfo/>
      <Link href="../">main</Link>
    </main>
   
  )
}