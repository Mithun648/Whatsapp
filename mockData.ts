export const mockConversations = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    lastMessage: "Hey! How are you doing?",
    timestamp: "10:30 AM",
    unread: 2,
    online: true,
  },
  {
    id: "2",
    name: "Mike Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    lastMessage: "Thanks for the help!",
    timestamp: "Yesterday",
    online: false,
  },
  {
    id: "3",
    name: "Emma Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    lastMessage: "See you tomorrow 👋",
    timestamp: "Yesterday",
    online: true,
  },
  {
    id: "4",
    name: "Alex Turner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    lastMessage: "That sounds great!",
    timestamp: "Tuesday",
    unread: 1,
    online: false,
  },
  {
    id: "5",
    name: "Lisa Park",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    lastMessage: "I'll send you the files",
    timestamp: "Monday",
    online: true,
  },
];

export const mockMessages: Record<string, Array<{
  id: string;
  text: string;
  timestamp: string;
  sent: boolean;
  status?: "sent" | "delivered" | "read";
}>> = {
  "1": [
    {
      id: "1",
      text: "Hi there! How's your day going?",
      timestamp: "10:15 AM",
      sent: false,
    },
    {
      id: "2",
      text: "Hey! It's going great, thanks for asking 😊",
      timestamp: "10:20 AM",
      sent: true,
      status: "read",
    },
    {
      id: "3",
      text: "That's wonderful to hear!",
      timestamp: "10:25 AM",
      sent: false,
    },
    {
      id: "4",
      text: "Hey! How are you doing?",
      timestamp: "10:30 AM",
      sent: false,
    },
    {
      id: "5",
      text: "I'm doing well! Just working on some projects. How about you?",
      timestamp: "10:30 AM",
      sent: true,
      status: "delivered",
    },
  ],
  "2": [
    {
      id: "1",
      text: "Could you help me with that thing we discussed?",
      timestamp: "Yesterday",
      sent: false,
    },
    {
      id: "2",
      text: "Of course! I'll send you the details right away",
      timestamp: "Yesterday",
      sent: true,
      status: "read",
    },
    {
      id: "3",
      text: "Thanks for the help!",
      timestamp: "Yesterday",
      sent: false,
    },
  ],
  "3": [
    {
      id: "1",
      text: "Are we still on for tomorrow?",
      timestamp: "Yesterday",
      sent: false,
    },
    {
      id: "2",
      text: "Yes! Looking forward to it",
      timestamp: "Yesterday",
      sent: true,
      status: "read",
    },
    {
      id: "3",
      text: "See you tomorrow 👋",
      timestamp: "Yesterday",
      sent: false,
    },
  ],
  "4": [
    {
      id: "1",
      text: "I have an idea for our next meeting",
      timestamp: "Tuesday",
      sent: false,
    },
    {
      id: "2",
      text: "That sounds great!",
      timestamp: "Tuesday",
      sent: false,
    },
  ],
  "5": [
    {
      id: "1",
      text: "Can you review the documents?",
      timestamp: "Monday",
      sent: true,
      status: "read",
    },
    {
      id: "2",
      text: "Sure thing! I'll look at them today",
      timestamp: "Monday",
      sent: false,
    },
    {
      id: "3",
      text: "I'll send you the files",
      timestamp: "Monday",
      sent: false,
    },
  ],
};
