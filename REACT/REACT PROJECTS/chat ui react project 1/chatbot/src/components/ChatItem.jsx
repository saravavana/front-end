import "./Chatitem.css";

function ChatItem({ name, onClick, isActive }) {
  return (
    <div
      className={isActive ? "chat-item active" : "chat-item"}
      onClick={onClick}
    >
      <div className="chat-avatar">
        {name.charAt(0).toUpperCase()}
      </div>

      <div className="chat-details">
        <h4>{name}</h4>
        <p>Last message...</p>
      </div>
    </div>
  );
}

export default ChatItem;