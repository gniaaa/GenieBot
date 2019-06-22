import React from 'react';

const msgDisplay = (creator) => {
  return creator === 'geniebot' ? 'geniebot' : 'chatuser';
}

const Message = ({ message }) => (
  <div className={msgDisplay(message.creator)}>
    {message.message}
  </div>
)

// TODO separate message display by geniebot and user
// with styled components or css prop in div

export default Message;