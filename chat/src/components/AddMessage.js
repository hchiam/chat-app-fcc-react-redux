import React from 'react';
import PropTypes from 'prop-types';

// custom component:

const AddMessage =(props)=> {
  let input;

  return (
    <section id='new-message'>
      <input 
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            // dispatch is type-checked in AddMessage.PropTypes below
            props.dispatch(input.value, 'Me');
            input.value = '';
          }
        }} 
        type='text'
        ref={(node) => {
          input = node;
        }}></input>
    </section>
  );
};

// type checking:

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired, // defines dispatch as a func (function)
};

// export:

export default AddMessage;
