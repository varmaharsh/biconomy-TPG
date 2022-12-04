import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Web3AuthProvider } from "./contexts/SocialLoginContext";
import { SmartAccountProvider } from "./contexts/SmartAccountContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import SecHandStore from "./pages/secondHandStore";
import Profile from "./pages/profile";
import BookInfo from "./pages/book";

const element = document.getElementById("root");
const root = createRoot(element!);

const Index = () => {
  return (
    <Web3AuthProvider>
      <SmartAccountProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/" element={<NavBar loggedIn={false} />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/secHandStore" element={<SecHandStore />}></Route>
            <Route path="/book/:bookId" element={<BookInfo />} />
          </Routes>
        </BrowserRouter>
        {/* <App /> */}
      </SmartAccountProvider>
    </Web3AuthProvider>
  );
};

root.render(<Index />);
