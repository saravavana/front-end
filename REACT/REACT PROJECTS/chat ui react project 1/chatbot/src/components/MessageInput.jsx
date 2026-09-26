import { useState, useRef } from "react";
import "./Messageinput.css";

function MessageInput({ addMessage}) {
  const [message, setMessage] = useState("");
  const fileInputRef = useRef();

  const Send = () => {
    if (message.trim() === "") return;

    addMessage(message);
    setMessage("");
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

       addMessage(` ${file.name}`);

     e.target.value = "";
  };

  return (
    <div className="message-input">
    
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFile}
      />

      
      <button
        type="button"
        className="attach-btn"
        onClick={() => fileInputRef.current.click()}
      >
        <i className="bi bi-paperclip"></i>
      </button>

      
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            Send();
          }
        }}
      />

      
      <button type="button" className="send-btn" onClick={Send}>
        <i className="bi bi-send-fill"></i>
      </button>
    </div>
  );
}

export default MessageInput;