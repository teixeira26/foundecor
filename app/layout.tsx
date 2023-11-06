import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foundecor',
  description: 'Descubre la mejor selección de pasta americana de calidad, con diferentes colores, sabores y texturas. Descubre cómo convertir tus pasteles en verdaderas obras de arte que dejarán a todos con la boca abierta. ¡Te esperamos!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
