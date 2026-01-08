import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { Card } from "../components/Card";
import { Users } from "../components/Users";
import { Chat } from "../icons/Chat";

export function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Appbar />

      <div className="m-8">
        <Users />
      </div>

      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 bg-pink-600 p-4 rounded-full shadow-lg hover:bg-pink-400 transition"
        >
          <Chat />
        </button>
      )}

      {isChatOpen && (
        <Card onClose={() => setIsChatOpen(false)} />
      )}
    </div>
  );
}
