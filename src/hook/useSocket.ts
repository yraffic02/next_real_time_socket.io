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

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("message", (data: IForm) => {
        console.log("recebida", data);
      });
    }
  }, [socket]);

  return {
    socket,
  };
};
