import { useState } from "react";
import AccessPage from "../views/AccessPage";
import RegistrationPage from "../views/RegistrationPage";
import { useSession } from "../core/SessionManager";

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal } = useSession();
  const [isLogin, setIsLogin] = useState(true);

  if (!showAuthModal) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowAuthModal(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-[rgba(140,140,140,0.5)] flex items-center justify-center z-50 p-4"
      onClick={handleBackgroundClick}
    >
      {isLogin ? (
        <AccessPage
          onSuccess={() => setShowAuthModal(false)}
          onSwitchMode={() => setIsLogin(false)}
          modal={true}
        />
      ) : (
        <RegistrationPage
          onSuccess={() => setShowAuthModal(false)}
          onSwitchMode={() => setIsLogin(true)}
          modal={true}
        />
      )}
    </div>
  );
}
