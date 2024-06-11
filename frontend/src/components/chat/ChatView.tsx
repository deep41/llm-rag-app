"use client";
import React, { useState } from "react";
import { z } from "zod";
import { messageSchema } from "@/lib/schemas";
import ChatBubble from "./ChatBubble";

const ChatView: React.FC = () => {
  const [messages, setMessages] = useState<{ type: string; content: string }[]>(
    [
      { type: "self", content: "**Bold Message**" },
      { type: "system", content: "_Italic Message_" },
      { type: "self", content: "### Semibold Message" },
      {
        type: "system",
        content: `| Header 1 | Header 2 |\n| ------- | ------- |\n| Cell 1  | Cell 2  |\n| Cell 3  | Cell 4  |`,
      },
    ],
  );
  const [inputValue, setInputValue] = useState("");

  const handlePostMessage = () => {
    try {
      // Validate input
      const parsed = messageSchema.parse({ content: inputValue });
      // Add new message to the array
      setMessages([...messages, { type: "self", content: parsed.content }]);
      // Clear the input field
      setInputValue("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        alert(error.errors.map((e) => e.message).join(", "));
      }
    }
  };

  return (
    <div className="flex w-full flex-col bg-white">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatBubble
            key={index}
            type={message.type as "self" | "system"}
            content={message.content}
          />
        ))}
      </div>
      <div className="border-gray-20 flex items-center border-t p-4">
        <input
          type="text"
          className="mr-2 flex-1 rounded-lg border border-gray-300 p-2"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handlePostMessage}
          className="rounded-lg bg-blue-500 p-2 text-white"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default ChatView;
