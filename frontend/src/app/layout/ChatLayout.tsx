"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import ChatSideBar from "@/components/chat/ChatSideBar";
import ChatView from "@/components/chat/ChatView";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const ChatLayout: React.FC = () => {
  const defaultSize = 24;
  const maxSize = 36;
  const minSize = 14;

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={defaultSize}
          maxSize={maxSize}
          minSize={minSize}
          className=""
        >
          <ChatSideBar />
        </ResizablePanel>
        <ResizableHandle className="w-[0.5px] cursor-ew-resize bg-black/60" />
        <ResizablePanel
          className="flex"
          defaultSize={100 - defaultSize}
          maxSize={100 - minSize}
          minSize={100 - maxSize}
        >
          <ChatView />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ChatLayout;
