import React from 'react';
import PropTypes from 'prop-types';

// custom component:

const Message =({message, author})=> (
  <p>
    <i>{author}</i>: {message}
  </p>
);

// type checking:

Message.propTypes = {
  message: PropTypes.string.isRequired, // defines message as a string
  author: PropTypes.string.isRequired, // defines author as a string
};

// export:

export default Message;
