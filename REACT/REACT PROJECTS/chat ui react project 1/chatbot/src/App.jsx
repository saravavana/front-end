import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import Login from "./components/Login";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const [user, setUser] = useState({
  name: "",
  email: "",
});
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Priya",
      messages: [
        {
          id: 1,
          sender: "Priya",
          text: "Hi!",
          time: "10:30 AM",
        },
        {
          id: 2,
          sender: "Me",
          text: "Hello ",
          time: "10:31 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Rahul",
      messages: [
        {
          id: 1,
          sender: "Rahul",
          text: "Hey Bro!",
          time: "11:00 AM",
        },
      ],
    },
    {
      id: 3,
      name: "John",
      messages: [
        {
          id: 1,
          sender: "John",
          text: "Good Morning",
          time: "09:00 AM",
        },
      ],
    },
    {
      id: 4,
      name: "kali",
      messages: [
        {
          id: 1,
          sender: "kali",
          text: "hey buddy!",
          time: "09:00 AM",
        },
      ],
    },
    {
      id: 5,
      name: "Kavi",
      messages: [
        {
          id: 1,
          sender: "Kavi",
          text: "dai enna panra",
          time: "08:00 AM",
        },
      ],
    },
    {
      id: 6,
      name: "Suji",
      messages: [
        {
          id: 1,
          sender: "Suji",
          text: "Good Night",
          time: "09:00 PM",
        },
      ],
    },
  ]);

  const [selectChat, setSelectChat] = useState(chats[0]);
  const handleLogin = (userData) => {
  setUser(userData);
  setIsLoggedIn(true);
};
const handleLogout = () => {
  setIsLoggedIn(false);

  setUser({
    name: "",
    email: "",
  });
};
  return (
  <>
    {!isLoggedIn ? (
      <Login onLogin={handleLogin} />
    ) : (
      <div className="app">
        <Sidebar
          chats={chats}
          selectChat={selectChat}
          setSelectChat={setSelectChat}
        />

        <ChatWindow
          selectChat={selectChat}
          chats={chats}
          setChats={setChats}
          setSelectChat={setSelectChat}
          user={user}
          handleLogout={handleLogout}
        />
      </div>
    )}
  </>
)
}
export default App