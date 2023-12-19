import { HeaderMessage } from "./messages/components/Header";

export default function MessageLayout ({children}: {children: React.ReactNode}){
  return(
    <>
      <HeaderMessage/>
      {children}
    </>
  )
}