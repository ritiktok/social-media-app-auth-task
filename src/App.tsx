import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainFeed from "./views/MainFeed";
import AccessPage from "./views/AccessPage";
import RegistrationPage from "./views/RegistrationPage";
import { SessionProvider } from "./core/SessionManager";

function App() {
  return (
    <SessionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainFeed />} />
          <Route path="/login" element={<AccessPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
        </Routes>
      </Router>
    </SessionProvider>
  );
}

export default App;
