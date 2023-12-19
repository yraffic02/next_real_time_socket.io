import { useWebSocket } from "@/hook/useSocket";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

export const useForm = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const {socket} = useWebSocket()

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (socket) {
        socket.emit("message", { name, message });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSendMessage,
    setName,
    setMessage,
    name,
    message
  }
};
