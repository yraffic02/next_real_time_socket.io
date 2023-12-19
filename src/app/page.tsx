import { Form } from "./components/Form";
import { HeaderHome } from "./components/Header";



export default function Home() {
  
  return (
    <>
    <HeaderHome />
    <main className="h-screen flex items-center justify-center">
      <Form />
    </main>
    </>
  );
}
