import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

// custom component:

const MessagesList =({messages})=> (
  <section id='messages-list'>
    <ul>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </ul>
  </section>
);

// type checking:

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

// export:

export default MessagesList;
