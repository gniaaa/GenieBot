import React from 'react';

const msgDisplay = (creator) => {
  return creator === 'geniebot' ? 'geniebot' : 'chatuser';
}

const wrapperDisp = (creator) => {
  return creator === 'geniebot' ? 'bot-wrapper' : 'user-wrapper';
}
// message structure
// id, index, creator, response


const Message = ({ message }) => (
  <div className={`chat-message ${wrapperDisp(message.creator)}`}>
    <div className={msgDisplay(message.creator)}>
      {message.message}
    </div>
  </div>
)

// TODO separate message display by geniebot and user
// with styled components or css prop in div

export default Message;