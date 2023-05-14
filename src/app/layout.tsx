import './globals.css'
import './style.css'
import NavBar from './navbar'

export const metadata = {
  title: 'LAB Skate - Skatepark Builder',
  description: 'Design and Build your skatepark imagination',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
