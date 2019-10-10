// the ability to connect containers and components:
import { connect } from 'react-redux';
// get component:
import SideBarComponent from '../components/SideBar';

// connect this container to the SideBar component:

export const SideBar = connect( // container
  (state) => ({
    users: state.users,
  }),
  {} // dispatch nothing
)(SideBarComponent); // component
