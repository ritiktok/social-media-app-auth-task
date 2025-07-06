import { FaRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSession } from "../core/SessionManager";

export default function NavigationBar({
  viewType = "home",
}: {
  viewType?: string;
}) {
  const navigate = useNavigate();
  const { currentAccount, endSession, setShowAuthModal } = useSession();

  const handleNavigation = () => {
    if (viewType === "home") {
      navigate("/");
    } else if (viewType === "login") {
      navigate("/login");
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="animate-slide-in-left">
      <div className="absolute top-4 left-4 text-sm font-semibold">
        <span className="inline-flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer">
          <div className="w-4 h-4 border-2 rounded-full mr-1 animate-pulse-slow"></div>
          foo-rum
        </span>
      </div>
      {currentAccount ? (
        <div
          className="absolute top-4 right-4 text-sm flex items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-200 hover:text-red-600"
          onClick={() => {
            endSession();
            navigate("/");
          }}
        >
          Logout
          <FaRightToBracket className="text-black text-lg hover:rotate-12 transition-transform duration-200" />
        </div>
      ) : (
        <div
          className="absolute top-4 right-4 text-sm flex items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-200 hover:text-blue-600"
          onClick={handleNavigation}
        >
          {viewType === "login" ? "Login" : "Back to home"}
          {viewType === "login" && (
            <FaRightToBracket className="text-black text-lg hover:rotate-12 transition-transform duration-200" />
          )}
        </div>
      )}
    </div>
  );
}
