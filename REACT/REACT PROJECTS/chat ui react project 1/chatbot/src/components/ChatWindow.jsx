import "./Chatwindow.css";
import Message from "./Message";
import { useState, useEffect } from "react";
import MessageInput from "./MessageInput";

function ChatWindow({ selectChat,chats,setChats, setSelectChat,user,
  handleLogout }) {
  const [messages, setMessages] = useState(selectChat.messages);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (selectChat) {
      setMessages(selectChat.messages);
    }
  }, [selectChat]);

  const addMessage = (text) => {
  if (text.trim() === "") return;

  const newMessage = {
    id: Date.now(),
    sender: "Me",
    text: text,
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  const updateChats = chats.map((chat) => {
    if (chat.id === selectChat.id) {
      return {
        ...chat,
        messages: [...chat.messages, newMessage],
      };
    }

    return chat;
  });

  setChats(updateChats);

  const updatedSelectedChat = updateChats.find(
    (chat) => chat.id === selectChat.id
  );

  setSelectChat(updatedSelectedChat);

  setMessages(updatedSelectedChat.messages);
};

  const deleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div className="chat-window">

      <div className="chat-header">
        <div className="profile">
          <div className="avatar">
            {selectChat.name[0]}
          </div>

          <div className="user-info">
            <h3>{selectChat.name}</h3>
            <p><i className="bi bi-circle-fill"></i>Online</p>
          </div>
        </div>
        <div
  className="header-icons">
   <div className="profile-menu">
    <div
      className="profile-avatar"
      onClick={() => setShowMenu(!showMenu)}
    >
      {user.name.charAt(0).toUpperCase()}
    </div>

    {showMenu && (
      <div className="logout-menu">
        <div className="menu-user">
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    )}

   </div>
   </div>
      </div>

      <div className="messages">
        {messages.map((message) => (
          <Message
            key={message.id}
            id={message.id}
            sender={message.sender}
            text={message.text}
            time={message.time}
            deleteMessage={deleteMessage}
          />
        ))}
      </div>

      <MessageInput addMessage={addMessage} />
    </div>
  );
}

export default ChatWindow;