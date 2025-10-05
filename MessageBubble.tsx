import { Check, CheckCheck } from "lucide-react";

interface Message {
  id: string;
  text: string;
  timestamp: string;
  sent: boolean;
  status?: "sent" | "delivered" | "read";
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div className={`flex ${message.sent ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-200`}>
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          message.sent
            ? "bg-[hsl(var(--message-sent))] text-accent-foreground"
            : "bg-[hsl(var(--message-received))] text-foreground"
        } shadow-sm`}
      >
        <p className="text-sm break-words">{message.text}</p>
        <div className="flex items-center gap-1 mt-1 justify-end">
          <span className="text-xs opacity-70">{message.timestamp}</span>
          {message.sent && (
            <span className="opacity-70">
              {message.status === "read" ? (
                <CheckCheck className="h-4 w-4 text-primary" />
              ) : message.status === "delivered" ? (
                <CheckCheck className="h-4 w-4" />
              ) : (
                <Check className="h-4 w-4" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
