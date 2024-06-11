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
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-grow flex-row">
        <button
          className="m-2 rounded bg-blue-500 p-2 text-white md:hidden"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } relative bg-gray-100 md:block`}
          style={{ width: `${sidebarWidth}px` }}
        >
          <ChatSideBar />
          <div
            className="absolute bottom-0 right-0 top-0 hidden w-0.5 cursor-ew-resize bg-black/20 md:block"
            onMouseDown={handleMouseDown}
          />
        </div>
        <ChatView />
      </div>
    </div>
  );
};

export default ChatLayout;
