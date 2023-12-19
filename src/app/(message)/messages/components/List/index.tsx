'use client'
import { useWebSocket } from "@/hook/useSocket";

export const List = () => {
  const { messages } = useWebSocket();
  return (
    <div>
      {messages &&
        messages.map((i) => (
          <p key={i.id}>
            {i.name}: {i.message}
          </p>
        ))}
    </div>
  );
};
