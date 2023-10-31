
import Link from 'next/link'
import StudentInfo from './student_info'

export default function Home() {
  return (
    <main>
      <h1 style={{ fontSize:55}}>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <Link href="/week2/">week2</Link> <br></br>
      <Link href="/week3/">week3</Link> <br></br>
      <Link href="/week4/">week4</Link> <br></br>
      <Link href="/week5/">week5</Link> <br></br>  
      <Link href="/week6/">week6</Link> <br></br>
      <Link href="/week7/">week7</Link> 
    </main>

  )
}
