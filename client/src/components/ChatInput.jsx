import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { Container } from "./styles/chatInput";

export const ChatInput = ({ handleSendMsg }) => {
  const [msg, setMsg] = useState("");

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendChat(event);
    }
  };

  return (
    <Container>
      <form className="input-container" onKeyDown={handleKeyDown}>
        <textarea
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit" onClick={sendChat}>
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
};
