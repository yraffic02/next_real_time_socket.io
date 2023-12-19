import { url } from "@/constants";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

interface IForm {
  id: string;
  name: string;
  message: string;
}

export const useWebSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<IForm[]>([]);

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("message", (data: IForm) => {
        setMessages((prev)=> [...prev, data])
      });
    }
  }, [socket]);

  return {
    socket,
    messages
  };
};
