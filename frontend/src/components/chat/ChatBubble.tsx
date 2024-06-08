// src/components/chat/ChatBubble.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatBubbleProps {
  type: "self" | "system";
  content: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ type, content }) => {
  return (
    <div
      className={`mb-4 p-2 rounded-lg max-w-xs ${
        type === "self"
          ? "bg-blue-500 text-white self-end ml-auto"
          : "bg-gray-300 text-black self-start mr-auto"
      }`}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default ChatBubble;
