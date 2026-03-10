import { useState, useEffect, useRef } from "react";
import { Chat } from "../icons/Chat";
import { CloseIcon } from "../icons/Close";
import { InputBox } from "./InputBox";
import axios from "axios";

export const Card = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: input
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const replyMessage = await callAI(input);

    setMessages((prev) => [...prev, replyMessage]);
    
    setLoading(false);
  };

  async function callAI(message) {
    try {
      const response = await axios.post(
        "https://venmo-backend-1.onrender.com/api/v1/user/chatbot",
        { message },{
          timeout: 60000
        }
      );

      return {
        role: "ai",
        content: response.data.message
      };

    } catch (err) {
      console.error("AI Error:", err.response?.data || err.message);

      let errorMessage = "AI service is currently unavailable.";

      if (err.response) {
        if (err.response.status === 401) {
          errorMessage = "Authentication failed. Please log in again.";
        } else if (err.response.status === 500) {
          errorMessage = "AI service error. Please try again later.";
        } else if (err.response.data?.error) {
          errorMessage = err.response.data.error;
        }
      }

      return {
        role: "ai",
        content: errorMessage
      };
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

          <div ref={bottomRef} />
        </div>

        
        <div className="p-3 border-t">
          <InputBox
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
