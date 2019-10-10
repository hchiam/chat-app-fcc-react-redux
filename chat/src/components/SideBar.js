import React from 'react';
import PropTypes from 'prop-types';

// custom component:

const SideBar =({users})=> (
  <aside id='sidebar' className='sidebar'>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
);

// type checking:

SideBar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

// export:

export default SideBar;
