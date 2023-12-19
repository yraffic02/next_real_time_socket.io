"use client";

import { useForm } from "./useForm";

export const Form = () => {
  const { handleSendMessage, setMessage, setName, name, message } = useForm();

  return (
    <form className="flex flex-col w-1/2 gap-3" onSubmit={handleSendMessage}>
      <label htmlFor="username">Nome:</label>
      <input
        type="text"
        id="username"
        className="border-gray-950 rounded-md p-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="message">Mensagem:</label>
      <input
        type="text"
        id="message"
        className="border-gray-950 rounded-md p-1"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
