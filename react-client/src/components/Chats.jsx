import React from 'react';
import Message from './Message.jsx';

const Chats = ({ messages }) => (
  <div>
    {messages.map((message, index) => (
      <Message message={message} key={index} />
    ))}
  </div>
)

export default Chats;