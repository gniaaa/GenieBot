import React from 'react';

const ChatInput = ({ handleChange, handleClick, input }) => (
  <div className="chat-input">
    <input type="text" className="input-text" onChange={handleChange} value={input}></input>
    <button type="submit" className="input-btn" onClick={handleClick}>send</button>
  </div>
)

export default ChatInput;