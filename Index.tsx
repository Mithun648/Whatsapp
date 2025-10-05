import ChatArea from "@/components/ChatArea";
import { mockMessages } from "@/data/mockData";

const Index = () => {
  const girlfriend = {
    id: "1",
    name: "My Love ❤️",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=girlfriend",
    online: true,
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <ChatArea
        conversation={girlfriend}
        messages={mockMessages["1"] || []}
      />
    </div>
  );
};

export default Index;
