
import Link from 'next/link'
import StudentInfo from './student_info'

export default function Home() {
  return (
    <main>
      <h1 style={{ fontSize:55}}>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo></StudentInfo>
      <Link href="/week2/">week2</Link>
    </main>

  )
}
