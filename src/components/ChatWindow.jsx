import React, { useState, useRef, useEffect } from "react";
import useChat from "../hooks/useChat";
import ModelSelection from "./ModelSelection";
import { DEFAULT_MODEL } from "../utils/constants";

const ChatWindow = () => {
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL);
  const { prompt, setPrompt, messages, sendPrompt } = useChat(selectedModel);
  const messagesEndRef = useRef(null);

  // Auto-scroll on message update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    sendPrompt();
  };

  return (
    <div className="w-screen h-screen bg-gray-950 flex flex-col items-center justify-center text-gray-100">
      <div className="w-1/2 h-[90%] flex flex-col bg-gray-950 border border-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Top Model Selection */}
        <ModelSelection
          selectedModel={selectedModel}
          onChange={setSelectedModel}
        />

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 mt-[110px]">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center opacity-70">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-semibold">Ready to chat</h3>
                <p>Type a message below to get started</p>
              </div>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-5 py-3 rounded-2xl max-w-[80%] break-words ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Section */}
        <form
          onSubmit={handleSend}
          className="p-4 border-t border-gray-800 bg-gray-900 flex gap-3"
        >
          <input
            type="text"
            className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            disabled={!prompt.trim()}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
