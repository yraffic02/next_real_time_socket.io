import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { HeaderMenu } from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Envie sua mensagem',
  description: 'Page para envio de mensagem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <HeaderMenu />
        {children}
        </body>
    </html>
  )
}
