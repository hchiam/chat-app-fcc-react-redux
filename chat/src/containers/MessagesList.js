// the ability to connect containers and components:
import { connect } from 'react-redux';
// get component:
import MessagesListComponent from '../components/MessagesList';

// connect this container to the MessagesList component:

export const MessagesList = connect( // container
  (state) => ({
    messages: state.messages,
  }),
  {} // dispatch nothing
)(MessagesListComponent); // component
