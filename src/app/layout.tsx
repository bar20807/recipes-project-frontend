import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Recipes Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>
            Recipes
          </h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
