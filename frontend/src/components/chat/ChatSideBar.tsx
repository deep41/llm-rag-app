// src/components/chat/ChatSideBar.tsx
import React from "react";

const ChatSideBar: React.FC = () => {
  return (
    <div className=" p-2.5 border-r border-gray-200">
      <div style={{ marginBottom: "10px", cursor: "pointer" }}>Tab 1</div>
      <div style={{ marginBottom: "10px", cursor: "pointer" }}>Tab 2</div>
      <div style={{ marginBottom: "10px", cursor: "pointer" }}>Tab 3</div>
    </div>
  );
};

export default ChatSideBar;
