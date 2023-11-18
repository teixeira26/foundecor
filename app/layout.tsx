import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foundecor',
  description: 'Explora y compra pasta americana decorativa de calidad premium en Foundecor. Variedad de colores, texturas y herramientas para repostería creativa. Personaliza pasteles y crea figuras con nuestro fondant exclusivo. Envío rápido y seguro. ¡Haz de cada creación una obra maestra con nuestra pasta americana para repostería!',
  openGraph: {
    title: 'Foundecor',
    description: 'Explora y compra pasta americana decorativa de calidad premium en Foundecor. Variedad de colores, texturas y herramientas para repostería creativa. Personaliza pasteles y crea figuras con nuestro fondant exclusivo. Envío rápido y seguro. ¡Haz de cada creación una obra maestra con nuestra pasta americana para repostería!',
    url: 'https://foundecor.vercel.app',
    siteName: 'Foundecor',
    images: [
      {
        url: './tortita.jpg',
        width: 800,
        height: 600,
      },
      {
        url: './tortita.jpg',
        width: 1800,
        height: 1600,
        alt: 'Torta hermosa',
      },
    ],
    type: 'website',
  },
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
