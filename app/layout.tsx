import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foundecor',
  description: 'Explora y compra pasta americana decorativa de calidad premium en Foundecor. Variedad de colores, texturas y herramientas para repostería creativa. Personaliza pasteles y crea figuras con nuestro fondant exclusivo. Envío rápido y seguro. ¡Haz de cada creación una obra maestra con nuestra pasta americana para repostería!',
  metadataBase: new URL("https://foundecor.vercel.app/"),
  openGraph: {
    title: 'Foundecor',
    description: 'Explora y compra pasta americana decorativa de calidad premium en Foundecor. Variedad de colores, texturas y herramientas para repostería creativa. Personaliza pasteles y crea figuras con nuestro fondant exclusivo. Envío rápido y seguro. ¡Haz de cada creación una obra maestra con nuestra pasta americana para repostería!',
    url: 'https://foundecor.vercel.app',
    siteName: 'Foundecor',
    type: 'website',
  },
  verification:{
    google: 'GFDtaOT135SmU8mWig9zmyPxqcdgW6wnqVOfccU_Lf8'
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
