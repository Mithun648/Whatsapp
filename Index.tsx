import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";
import { mockConversations, mockMessages } from "@/data/mockData";

const Index = () => {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0].id);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar
        conversations={mockConversations}
        selectedId={selectedConversation}
        onSelect={setSelectedConversation}
      />
      <ChatArea
        conversation={mockConversations.find(c => c.id === selectedConversation)!}
        messages={mockMessages[selectedConversation] || []}
      />
    </div>
  );
};

export default Index;
