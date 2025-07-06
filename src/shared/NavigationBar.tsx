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
    <div>
      <div className="absolute top-4 left-4 text-sm font-semibold">
        <span className="inline-flex items-center">
          <div className="w-4 h-4 border-2 rounded-full mr-1"></div>
          foo-rum
        </span>
      </div>
      {currentAccount ? (
        <div
          className="absolute top-4 right-4 text-sm flex items-center gap-2 cursor-pointer"
          onClick={() => {
            endSession();
            navigate("/");
          }}
        >
          Logout
          <FaRightToBracket className="text-black text-lg" />
        </div>
      ) : (
        <div
          className="absolute top-4 right-4 text-sm flex items-center gap-2 cursor-pointer"
          onClick={handleNavigation}
        >
          {viewType === "login" ? "Login" : "Back to home"}
          {viewType === "login" && (
            <FaRightToBracket className="text-black text-lg" />
          )}
        </div>
      )}
    </div>
  );
}
