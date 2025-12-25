import { useState } from "react";
import { Chat } from "../icons/Chat";
import { CloseIcon } from "../icons/Close";
import { InputBox } from "./InputBox";
import axios from "axios";
export const Card = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
    ]);

    setInput("");
    setLoading(true);

    const reply = await callAI(input);

    
    setMessages((prev) => [
      ...prev,
      { role: "ai", content: reply },
    ]);

    setLoading(false);
  };


  async function callAI(message) {
  try {
    const response = await axios.post("http://localhost:3000/api/v1/user/api/chat",{
      message : messages,
    },{
      headers :{
        Authorization : `Bearer ${token}`,
        "Content-Type" : "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return "AI service is currently unavailable.";
  }
}

  return (
    <div className="p-10">
      <div className="w-72 h-80 rounded-2xl bg-red-400 flex flex-col">

        <div className="flex text-xl font-semibold justify-center gap-2 items-center pt-2">
          <Chat /> ChatBot Assistant
          <div className="flex pt-1 pl-9 cursor-pointer">
            <CloseIcon />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 text-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-blue-500 text-white text-right"
                  : "bg-gray-300 text-black text-left"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="text-xs text-gray-500">AI is typing...</div>
          )}
        </div>
        <div className="px-2 pb-2">
          <InputBox
            placeholder="Enter to Chat"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
        </div>
      </div>
    </div>
  );
};




