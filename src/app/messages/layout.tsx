import type { Metadata } from "next";
import { HeaderMessage } from "./components/Header";


export const metadata: Metadata = {
  title: "E-pedidos Cardapio",
  description:
    "E-pedidos é um aplicativo que oferece uma solução completa para administração, cardápio e agilidade em pedidos de alimentos e bebidas.ss",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderMessage />
      {children}
    </>
  );
}
