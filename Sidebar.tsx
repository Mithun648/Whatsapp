import { Search, MessageCircle, MoreVertical, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
  online?: boolean;
}

interface SidebarProps {
  conversations: Conversation[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const Sidebar = ({ conversations, selectedId, onSelect }: SidebarProps) => {
  return (
    <div className="w-full md:w-96 border-r border-border flex flex-col bg-card">
      {/* Header */}
      <div className="p-4 bg-secondary flex items-center justify-between">
        <h1 className="text-xl font-semibold text-secondary-foreground flex items-center gap-2">
          <MessageCircle className="h-6 w-6" />
          Chats
        </h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-secondary-foreground hover:bg-secondary-foreground/10">
            <Users className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-secondary-foreground hover:bg-secondary-foreground/10">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search or start new chat"
            className="pl-10 bg-muted border-none"
          />
        </div>
      </div>

      {/* Conversations List */}
      <ScrollArea className="flex-1">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelect(conversation.id)}
            className={`w-full p-4 flex items-start gap-3 hover:bg-accent/50 transition-colors border-b border-border ${
              selectedId === conversation.id ? "bg-accent" : ""
            }`}
          >
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={conversation.avatar} alt={conversation.name} />
                <AvatarFallback>{conversation.name[0]}</AvatarFallback>
              </Avatar>
              {conversation.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-primary rounded-full border-2 border-card" />
              )}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-sm truncate">{conversation.name}</h3>
                <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                {conversation.unread && (
                  <span className="ml-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-semibold min-w-[20px] text-center">
                    {conversation.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
