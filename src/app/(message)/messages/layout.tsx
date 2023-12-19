import type { Metadata } from 'next'
import { HeaderMessage } from "./components/Header";

export const metadata: Metadata = {
  title: 'Mensagens recebidas',
  description: 'Page para olhar mensagens recebidas',
}

export default function MessagesLayout({children}: {children: React.ReactNode}){
  return(
    <section>
      <HeaderMessage/>
      {children}
    </section>
  )
}