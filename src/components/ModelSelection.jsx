import React from "react";
import { GROQ_MODELS } from "../utils/constants";

const ModelSelection = ({ selectedModel, onChange }) => {
  const handleClearChat = () => {
    localStorage.removeItem("chatHistory");
    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-1/2 bg-gray-900 border-b border-gray-800 z-50 rounded-b-lg shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Title */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-bold text-lg">AI Chat Assistant</span>
        </div>

        {/* Center: Model Select */}
        <div className="flex-1 max-w-md mx-6">
          <select
            value={selectedModel}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {GROQ_MODELS.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        </div>

        {/* Right: Clear Button */}
        <button
          onClick={handleClearChat}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-200 border border-gray-700 transition"
        >
          🗑️ Clear
        </button>
      </div>
    </div>
  );
};

export default ModelSelection;
