import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import useGroq from "./hooks/useGroq";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ChatWindow />
    </div>
  );
}

export default App;
