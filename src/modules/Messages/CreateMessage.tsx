import { useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaCode,
  FaTrashAlt,
  FaPlus,
  FaMicrophone,
  FaPaperPlane,
  FaSmile,
  FaVideo,
} from "react-icons/fa";
import type { MessageItem } from "../../data/MessageData";
import { useSession } from "../../core/SessionManager";

export default function CreateMessage({
  messages,
  setMessages,
  handleInteraction,
}: {
  messages: MessageItem[];
  setMessages: React.Dispatch<React.SetStateAction<MessageItem[]>>;
  handleInteraction: () => void;
}) {
  const { currentAccount, setShowAuthModal } = useSession();
  const [messageText, setMessageText] = useState<string>("");

  const handleSubmit = () => {
    if (!currentAccount) {
      setShowAuthModal(true);
      return;
    }
    if (messageText.trim() === "") return;
    setMessages([
      {
        id: Date.now(),
        name: "You",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        emoji: "🐶",
        content: messageText,
        createdOn: new Date().toISOString(),
      },
      ...messages,
    ]);
    setMessageText("");
  };

  const handleAuthInteraction = () => {
    if (!currentAccount) {
      setShowAuthModal(true);
    } else {
      handleInteraction();
    }
  };

  return (
    <div className="rounded-2xl p-1 mb-8 bg-gray-50 shadow-sm w-full max-w-md animate-scale-in">
      <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm w-full max-w-md hover:shadow-md transition-all duration-300">
        <div className="mb-2 grid grid-cols-12 items-center gap-2">
          <div className="col-span-12 sm:col-span-10 flex flex-wrap items-center bg-gray-100 rounded-lg p-1">
            <select className="bg-white rounded-lg shadow-sm px-2 py-1 text-sm text-gray-700 mr-2 mb-1 hover:shadow-md transition-shadow duration-200">
              <option>Paragraph</option>
            </select>

            <div className="flex items-center gap-1 mb-1">
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-all duration-150 bg-white hover:bg-gray-200 rounded hover:shadow-sm"
                onClick={handleAuthInteraction}
              >
                <FaBold />
              </button>
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-all duration-150 hover:bg-gray-200 rounded hover:shadow-sm"
                onClick={handleAuthInteraction}
              >
                <FaItalic />
              </button>
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-all duration-150 hover:bg-gray-200 rounded hover:shadow-sm"
                onClick={handleAuthInteraction}
              >
                <FaUnderline />
              </button>
            </div>

            <div className="h-5 w-px bg-gray-300 mx-2 hidden sm:block"></div>

            <div className="flex items-center gap-1 mb-1">
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-all duration-150 hover:bg-gray-200 rounded hover:shadow-sm"
                onClick={handleAuthInteraction}
              >
                <FaListUl />
              </button>
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-all duration-150 hover:bg-gray-200 rounded hover:shadow-sm"
                onClick={handleAuthInteraction}
              >
                <FaListOl />
              </button>
            </div>

            <div className="h-5 w-px bg-gray-300 mx-2 hidden sm:block"></div>

            <div className="flex items-center gap-1 mb-1">
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-all duration-150 hover:bg-gray-200 rounded hover:shadow-sm"
                onClick={handleAuthInteraction}
              >
                99
              </button>
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-all duration-150 hover:bg-gray-200 rounded hover:shadow-sm"
                onClick={handleAuthInteraction}
              >
                <FaCode />
              </button>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-2 flex justify-end">
            <button
              onClick={handleAuthInteraction}
              className="text-red-500 bg-red-100 rounded-lg p-3 cursor-pointer hover:scale-105 hover:bg-red-200 transition-all duration-150 hover:shadow-md"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>

        <div className="flex items-start mb-2">
          <div
            className="mr-2 text-lg text-gray-500 cursor-pointer hover:scale-110 hover:text-yellow-500 transition-all duration-200"
            onClick={handleAuthInteraction}
          >
            <FaSmile />
          </div>
          <textarea
            value={messageText}
            onClick={() => {
              if (!currentAccount) {
                setShowAuthModal(true);
              }
            }}
            onChange={(e) => setMessageText(e.target.value)}
            className="w-full outline-none text-sm placeholder-gray-400 focus:placeholder-gray-300 transition-colors duration-200"
            placeholder="How are you feeling today?"
            rows={4}
            style={{ resize: "none" }}
          ></textarea>
        </div>

        <div className="border-t border-gray-200 my-2 -mx-2"></div>

        <div className="flex items-center justify-between">
          <div
            className="flex gap-3 text-gray-500"
            onClick={handleAuthInteraction}
          >
            <button className="bg-gray-100 rounded-lg p-2 cursor-pointer hover:scale-110 hover:bg-gray-200 transition-all duration-200">
              <FaPlus />
            </button>
            <button className="cursor-pointer hover:scale-110 hover:text-blue-500 transition-all duration-200">
              <FaMicrophone />
            </button>
            <button className="cursor-pointer hover:scale-110 hover:text-purple-500 transition-all duration-200">
              <FaVideo />
            </button>
          </div>
          <button
            onClick={handleSubmit}
            className="text-xl cursor-pointer text-indigo-600 hover:scale-110 hover:text-indigo-700 transition-all duration-200 hover:rotate-12"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}
