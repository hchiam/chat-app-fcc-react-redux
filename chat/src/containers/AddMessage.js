// the ability to connect containers and components:
import { connect } from 'react-redux';
// get component:
import AddMessageComponent from '../components/AddMessage';
// get action:
import { addMessage } from '../actions';

const mapDispatchToProps =(dispatch)=> ({
  dispatch: (message, author) => {
    // this dispatch is from Redux, not our custom one
    dispatch(addMessage(message, author));
    // this will dispatch our "addMessage" action from actions/index.js
  }
});

// connect this container to the AddMessage component:

export const AddMessage = connect( // container
  () => ({}),
  mapDispatchToProps // dispatch
)(AddMessageComponent); // component
