"use client";

import { useState } from "react";

const MessagesComponent = () => {
  const [messages, setMessages] = useState(["Hello"] as string[]);

  const fetchDummyMessage = async () => {
    try {
      const response = await fetch("/api/dummy-message");
      const data = await response.json();
      setMessages([...messages, data.message]);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {messages.map((m, i) => (
        <p key={i}>{m}</p>
      ))}
      <button onClick={fetchDummyMessage}>Add Message</button>
    </div>
  );
};

export default MessagesComponent;
