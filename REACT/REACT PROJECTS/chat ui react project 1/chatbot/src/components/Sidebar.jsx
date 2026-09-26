import { useState } from "react";
import ChatItem from "./ChatItem";
import "./sidebar.css";

function Sidebar({
  chats,
  setChats,
  selectChat,
  setSelectChat,
}) {
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [newChat, setNewChat] = useState("");

  const createChat = () => {
    if (newChat.trim() === "") return;

    const chat = {
      id: Date.now(),
      name: newChat,
      messages: [],
    };

    setChats([...chats, chat]);
    setShowPopup(false);
    setNewChat("");
  };

  return (
    <div className="sidebar">

      <h2>Messages</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search chats..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="add-chat-btn"
          onClick={() => setShowPopup(true)}
        >
          +
        </button>

      </div>

      <div className="chat-list">
        {chats
          .filter((chat) =>
            chat.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((chat) => (
            <ChatItem
              key={chat.id}
              name={chat.name}
              isActive={selectChat.id === chat.id}
              onClick={() => setSelectChat(chat)}
            />
          ))}
      </div>

      {showPopup && (
        <div className="popup-overlay">

          <div className="popup">

            <h3>Create Chat</h3>

            <input
              type="text"
              placeholder="Enter Name"
              value={newChat}
              onChange={(e) => setNewChat(e.target.value)}
            />

            <div className="popup-buttons">

              <button onClick={createChat}>
                Create
              </button>

              <button
                onClick={() => {
                  setShowPopup(false);
                  setNewChat("");
                }}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Sidebar;