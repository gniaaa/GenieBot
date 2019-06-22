import React from 'react';
import Message from './Message.jsx';

const Chats = ({ messages }) => (
  <div className="all-chats">
    {messages.map((message, index) => {
      return <Message message={message} key={index} />;
    })}
  </div>
)

export default Chats;