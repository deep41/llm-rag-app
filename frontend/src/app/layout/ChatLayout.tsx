"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import ChatSideBar from "@/components/chat/ChatSideBar";
import ChatView from "@/components/chat/ChatView";

const ChatLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(350);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + e.clientX - startX;
      if (newWidth >= 200 && newWidth <= 600) {
        setSidebarWidth(newWidth);
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow flex-row">
        <button
          className="md:hidden p-2 m-2 bg-blue-500 text-white rounded"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block relative bg-blue-50`}
          style={{ width: `${sidebarWidth}px` }}
        >
          <ChatSideBar />
          <div
            className="absolute top-0 right-0 bottom-0 w-0.5 bg-black/20 cursor-ew-resize md:block hidden"
            onMouseDown={handleMouseDown}
          />
        </div>
        <ChatView />
      </div>
    </div>
  );
};

export default ChatLayout;
