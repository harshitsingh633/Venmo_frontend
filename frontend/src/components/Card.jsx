import { useState } from "react";
import { Chat } from "../icons/Chat";
import { CloseIcon } from "../icons/Close";
import { InputBox } from "./InputBox";
import axios from "axios";

export const Card = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setLoading(true);

    const reply = await callAI(input);
    setMessages((prev) => [...prev, { role: "ai", content: reply }]);
    setLoading(false);
  };

  async function callAI(message) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/api/chat",
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.reply;
    } catch {
      return "AI service is currently unavailable.";
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="w-[90vw] max-w-sm h-[70vh] max-h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-pink-400 text-white">
          <div className="flex items-center gap-2 font-semibold">
            <Chat /> AI Assistant
          </div>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] px-3 py-2 rounded-xl ${
                msg.role === "user"
                  ? "ml-auto bg-blue-500 text-white"
                  : "mr-auto bg-gray-200 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <p className="text-xs text-gray-400">AI is typing...</p>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t">
          <InputBox
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
        </div>
      </div>
    </div>
  );
};
