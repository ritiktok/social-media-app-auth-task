import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import type { MessageItem } from "../../data/MessageData";
import { useSession } from "../../core/SessionManager";

export default function MessageItem({
  message,
  handleInteraction,
}: {
  message: MessageItem;
  handleInteraction: () => void;
}) {
  const { currentAccount, setShowAuthModal } = useSession();

  const handleAuthInteraction = () => {
    if (!currentAccount) {
      setShowAuthModal(true);
    } else {
      handleInteraction();
    }
  };

  return (
    <div className="rounded-2xl p-1 mb-4 bg-gray-50 shadow-sm w-full max-w-md">
      <div className="bg-white p-2 rounded-2xl border border-gray-200 ">
        <div className="flex items-center mb-2 grid grid-cols-12">
          <img
            src={message.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-md col-span-1 text-center"
          />
          <div className="col-span-11 ml-1">
            <div className="font-semibold text-sm text-gray-800">
              {message.name}
            </div>
            <div className="text-xs text-gray-500">5 mins ago</div>
          </div>
        </div>

        <div className="flex items-start grid grid-cols-12">
          <div className="text-sm mr-2 col-span-1 text-center">
            <span className="rounded-full p-0.75 bg-gray-200">
              {message?.emoji}
            </span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed col-span-11 ml-1">
            {message.content}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 text-gray-500 text-base px-3 py-2 pb-1">
        <button
          className="cursor-pointer hover:scale-110 transition-transform duration-100"
          onClick={handleAuthInteraction}
        >
          <FaRegHeart />
        </button>
        <button
          className="cursor-pointer hover:scale-110 transition-transform duration-100"
          onClick={handleAuthInteraction}
        >
          <FaRegComment />
        </button>
        <button
          className="cursor-pointer hover:scale-110 transition-transform duration-100"
          onClick={handleAuthInteraction}
        >
          <FaRegPaperPlane />
        </button>
      </div>
    </div>
  );
}
