import { Inter } from 'next/font/google'

// Importing the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] })

// Metadata for the page
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// Root layout component
export default function RootLayout({ children }) {
  return (
    // HTML structure with language set to 'en'
    <html lang="en">
      {/* Body of the HTML with the Inter font applied to the class name */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}