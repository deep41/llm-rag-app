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
      className={`mb-4 max-w-xs rounded-lg p-2 ${
        type === "self"
          ? "ml-auto self-end bg-blue-500 text-white"
          : "mr-auto self-start bg-gray-300 text-black"
      }`}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default ChatBubble;
