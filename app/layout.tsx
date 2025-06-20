import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flor <3',
  description: 'Portfolio y blog de Florencia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
