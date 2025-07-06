import { useState } from "react";
import { FaRightToBracket } from "react-icons/fa6";
import NavigationBar from "../shared/NavigationBar";
import { useNavigate } from "react-router-dom";
import { useSession } from "../core/SessionManager";

interface AccessPageProps {
  onSuccess?: () => void;
  onSwitchMode?: () => void;
  modal?: boolean;
}

export default function AccessPage({
  onSuccess,
  onSwitchMode,
  modal = false,
}: AccessPageProps = {}) {
  const navigate = useNavigate();
  const { authenticateUser } = useSession();
  const [userPassword, setUserPassword] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAccess = () => {
    const success = authenticateUser(userEmail, userPassword);
    if (success) {
      if (onSuccess) {
        onSuccess();
      } else {
        navigate("/");
      }
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  if (modal) {
    return (
      <div className="w-full max-w-sm bg-gray-200 rounded-2xl p-2 shadow-sm animate-scale-in">
        <div className="bg-white rounded-2xl p-10 pt-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2 hover:scale-110 transition-transform duration-200">
              <FaRightToBracket className="text-black" />
            </div>
            <h2 className="text-lg font-semibold mb-1">Sign in to continue</h2>
            <p className="text-sm text-gray-500 mb-4 text-center">
              Sign in to access all the features on this app
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {errorMessage && (
              <div className="text-red-500 text-xs text-center animate-fade-in">
                {errorMessage}
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email or username
              </label>
              <input
                type="text"
                placeholder="Enter your email or username"
                className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-300 bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white transition-colors duration-200"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-300 bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white transition-colors duration-200"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-indigo-500 text-white rounded-xl py-3 mt-2 hover:bg-indigo-600 hover:scale-105 transition-all duration-200 text-xs cursor-pointer"
              onClick={handleAccess}
            >
              Sign In
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-4">
          Do not have an account?{" "}
          <span
            className="text-indigo-700 cursor-pointer hover:text-indigo-900 transition-colors duration-200"
            onClick={() => {
              if (onSwitchMode) {
                onSwitchMode();
              } else {
                navigate("/signup");
              }
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12 animate-fade-in">
      {!onSuccess && <NavigationBar />}
      <div className="w-full max-w-sm bg-gray-200 rounded-2xl p-2 shadow-sm animate-scale-in">
        <div className="bg-white rounded-2xl p-10 pt-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2 hover:scale-110 transition-transform duration-200">
              <FaRightToBracket className="text-black" />
            </div>
            <h2 className="text-lg font-semibold mb-1">Sign in to continue</h2>
            <p className="text-sm text-gray-500 mb-4 text-center">
              Sign in to access all the features on this app
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {errorMessage && (
              <div className="text-red-500 text-xs text-center animate-fade-in">
                {errorMessage}
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email or username
              </label>
              <input
                type="text"
                placeholder="Enter your email or username"
                className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-300 bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white transition-colors duration-200"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-300 bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white transition-colors duration-200"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-indigo-500 text-white rounded-xl py-3 mt-2 hover:bg-indigo-600 hover:scale-105 transition-all duration-200 text-xs cursor-pointer"
              onClick={handleAccess}
            >
              Sign In
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-4">
          Do not have an account?{" "}
          <span
            className="text-indigo-700 cursor-pointer hover:text-indigo-900 transition-colors duration-200"
            onClick={() => {
              if (onSwitchMode) {
                onSwitchMode();
              } else {
                navigate("/signup");
              }
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
