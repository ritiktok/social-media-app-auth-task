import { createContext, useContext, useState, useEffect } from "react";

export interface AccountInfo {
  email: string;
  password: string;
}

interface SessionContextType {
  currentAccount: AccountInfo | null;
  authenticateUser: (email: string, password: string) => boolean;
  endSession: () => void;
  registerAccount: (email: string, password: string) => boolean;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const SAMPLE_ACCOUNTS: AccountInfo[] = [
  { email: "demo@example.com", password: "password123" },
  { email: "test@user.com", password: "testpass" },
];

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentAccount, setCurrentAccount] = useState<AccountInfo | null>(
    null
  );
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);

  useEffect(() => {
    const storedAccount = localStorage.getItem("currentAccount");
    if (storedAccount) {
      setCurrentAccount(JSON.parse(storedAccount));
    }

    if (!localStorage.getItem("accounts")) {
      localStorage.setItem("accounts", JSON.stringify(SAMPLE_ACCOUNTS));
    }
  }, []);

  const authenticateUser = (email: string, password: string): boolean => {
    const accounts: AccountInfo[] = JSON.parse(
      localStorage.getItem("accounts") || "[]"
    );
    const found = accounts.find(
      (acc) => acc.email === email && acc.password === password
    );
    if (found) {
      setCurrentAccount(found);
      localStorage.setItem("currentAccount", JSON.stringify(found));
      setShowAuthModal(false);
      return true;
    }
    return false;
  };

  const endSession = () => {
    setCurrentAccount(null);
    localStorage.removeItem("currentAccount");
  };

  const registerAccount = (email: string, password: string): boolean => {
    const accounts: AccountInfo[] = JSON.parse(
      localStorage.getItem("accounts") || "[]"
    );
    if (accounts.find((acc) => acc.email === email)) {
      return false;
    }
    const newAccount = { email, password };
    accounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    setCurrentAccount(newAccount);
    localStorage.setItem("currentAccount", JSON.stringify(newAccount));
    setShowAuthModal(false);
    return true;
  };

  return (
    <SessionContext.Provider
      value={{
        currentAccount,
        authenticateUser,
        endSession,
        registerAccount,
        showAuthModal,
        setShowAuthModal,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = (): SessionContextType => {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used inside SessionProvider");
  return ctx;
};
