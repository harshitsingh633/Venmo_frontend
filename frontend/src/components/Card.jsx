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
  const token = localStorage.getItem("token");

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      type: "TEXT",
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
        "http://localhost:3000/api/v1/user/api/chat",
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      return {
        role: "ai",
        ...response.data
      };
    } catch (err) {
      return {
        role: "ai",
        type: "TEXT",
        content: "AI service is currently unavailable."
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

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
          {messages.map((msg, index) => {
            if (msg.type === "TRANSACTION") {
              return (
                <div
                  key={index}
                  className="mr-auto max-w-[85%] bg-green-50 border border-green-400 rounded-xl p-3"
                >
                  <p className="font-semibold text-green-700">
                    💸 Payment Receipt
                  </p>

                  <p className="text-lg font-bold text-gray-800 mt-1">
                    ₹{msg.transactionSnapshot.amount}
                  </p>

                  <p className="text-xs text-gray-600">
                    To: {msg.transactionSnapshot.to}
                  </p>

                  <p
                    className={`text-xs font-semibold ${
                      msg.transactionSnapshot.status === "SUCCESS"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {msg.transactionSnapshot.status}
                  </p>

                  <p className="text-[10px] text-gray-400 mt-1">
                    {new Date(
                      msg.transactionSnapshot.date
                    ).toLocaleString()}
                  </p>
                </div>
              );
            }

            // 💬 NORMAL TEXT MESSAGE
            return (
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
            );
          })}

          {loading && (
            <p className="text-xs text-gray-400">AI is typing...</p>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
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
