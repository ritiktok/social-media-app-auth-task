import { useState } from "react";
import MessageItem from "../modules/Messages/MessageItem";
import CreateMessage from "../modules/Messages/CreateMessage";
import NavigationBar from "../shared/NavigationBar";
import AuthModal from "../shared/AuthModal";
import type { MessageItem as MessageItemType } from "../data/MessageData";
import { useSession } from "../core/SessionManager";

const SAMPLE_MESSAGES: MessageItemType[] = [
  {
    id: 1,
    name: "Theresa Webb",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    emoji: "🤪",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdOn: "2022-06-14T10:15:00Z",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    emoji: "😔",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdOn: "2021-02-14T11:30:00Z",
  },
  {
    id: 3,
    name: "Jane Doe",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    emoji: "🤠",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdOn: "2021-03-14T12:00:00Z",
  },
  {
    id: 4,
    name: "John Brown",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    emoji: "🥲",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdOn: "2024-02-14T12:45:00Z",
  },
];

export default function MainFeed() {
  const [messages, setMessages] = useState<MessageItemType[]>([
    ...SAMPLE_MESSAGES,
  ]);
  const { currentAccount, setShowAuthModal } = useSession();

  const showNotification = () => {
    if (currentAccount) {
      alert("function not implemented");
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 flex flex-col items-center justify-center animate-fade-in">
      <NavigationBar viewType={"login"} />
      <CreateMessage
        messages={messages}
        setMessages={setMessages}
        handleInteraction={showNotification}
      />
      {messages?.map((message, index) => (
        <MessageItem
          key={message.id}
          message={message}
          handleInteraction={showNotification}
          animationDelay={index * 0.1}
        />
      ))}
      <AuthModal />
    </div>
  );
}
