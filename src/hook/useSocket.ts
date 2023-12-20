import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { url } from "@/constants";

interface IForm {
  id: string;
  name: string;
  message: string;
}

export const useWebSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<IForm[]>([]);

  useEffect(() => {
    try {
      const newSocket = io(url);
      setSocket(newSocket);
      
      return () => {
        newSocket.disconnect();
      };
    } catch (error) {
      console.error("Erro ao criar o WebSocket:", error);
    }
  }, []);

  useEffect(() => {
    if (socket) {
      const handleSocketMessage = (data: IForm) => {
        setMessages((prev) => [...prev, data]);
      };

      socket.on("message", handleSocketMessage);
      return () => {
        socket.off("message", handleSocketMessage);
      };
    }
  }, [socket]);

  return {
    socket,
    messages,
  };
};
