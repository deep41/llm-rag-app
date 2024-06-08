// src/components/layouts/ChatLayout.tsx
import React from "react";
import ChatSideBar from "../../components/chat/ChatSideBar";
import ChatView from "../../components/chat/ChatView";
import Header from "@/components/Header";

const ChatLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow flex-row">
        <ChatSideBar />
        <ChatView />
      </div>
    </div>
  );
};

export default ChatLayout;
