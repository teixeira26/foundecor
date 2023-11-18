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
        url: 'https://instagram.fepa14-1.fna.fbcdn.net/v/t51.2885-15/318454138_484061150378429_478625131591675091_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fepa14-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=uWJkbsYtH-sAX8Q7nml&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk4OTAyNTUwNjY4NzI2MjcwOA%3D%3D.2-ccb7-5&oh=00_AfAlKKx0xXbWf-Ix_6rYy5uzN2erj-2q_FwAtkqBSS_L0w&oe=655B79B0&_nc_sid=b41fef',
        width: 800,
        height: 600,
      },
      {
        url: 'https://instagram.fepa14-1.fna.fbcdn.net/v/t51.2885-15/318454138_484061150378429_478625131591675091_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fepa14-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=uWJkbsYtH-sAX8Q7nml&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk4OTAyNTUwNjY4NzI2MjcwOA%3D%3D.2-ccb7-5&oh=00_AfAlKKx0xXbWf-Ix_6rYy5uzN2erj-2q_FwAtkqBSS_L0w&oe=655B79B0&_nc_sid=b41fef',
        width: 1800,
        height: 1600,
        alt: 'Torta hermosa',
      },
    ],
    type: 'website',
  },
  keywords:["Compra pasta americana decorativa online",
  "Ofertas de fondant para repostería",
  "Tienda de pasta americana para pasteles",
  "Cómo comprar fondant para decorar pasteles",
  "Dónde encontrar pasta americana en oferta",
  "Comparativa de precios de fondant comestible",
  "Venta de moldes para pasta americana",
  "Comprar herramientas para decorar pasteles",
  "Descuentos en pasta americana para repostería",
  "Tienda online de suministros para decorar pasteles",
  "Mejores precios en fondant para pasteles",
  "Compra fondant de calidad para tartas",
  "Ofertas exclusivas en decoración con pasta americana",
  "Envío rápido de fondant para pasteles",
  "Cómo adquirir pasta americana personalizada",
  "Mejor lugar para comprar pasta americana de colores",
  "Compra segura de fondant online",
  "Tienda con la mejor selección de pasta americana",
  "Dónde comprar figuras de fondant para pasteles",
  "Descuentos especiales en kit de decoración con pasta americana"]
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
