import "./Message.css";

function Message({ id, sender, text, time, deleteMessage }) {
  return (
    <div className={sender === "Me" ? "message me" : "message"}>
      {sender !== "Me" && <h4>{sender}</h4>}

      <p>{text}</p>

      <small>{time}</small>

      <button
        className="delete-btn"
        onClick={() => deleteMessage(id)}
      >
        <i className="bi bi-trash-fill"></i>
      </button>
    </div>
  );
}

export default Message;